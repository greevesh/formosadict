import './style.css'
import { MeiliSearch } from 'meilisearch'
import translations from '/translations.json'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import instantsearch from 'instantsearch.js'
import { searchBox, hits } from 'instantsearch.js/es/widgets'

async () => {
  const client = new MeiliSearch({ host: 'http://127.0.0.1:7700' })
  const index = client.index('translations')

  let response = index.addDocuments(translations)

  console.log(response)
}

const searchClient = instantMeiliSearch(
  'http://127.0.0.1:7700',
  {
    paginationTotalHits: 30, // default: 200.
    placeholderSearch: false, // default: true.
    primaryKey: 'id', // default: undefined
  }
)

const search = instantsearch({
  indexName: 'translations',
  searchClient: instantMeiliSearch(
    'http://127.0.0.1:7700',
  ),
})

search.addWidgets([
  searchBox({
    container: '#searchbox',
  }),
  hits({
    container: '#hits',
    templates: {
      empty: 
        `{{#query}}
          No results found for <q>{{query}}</q>
        {{/query}}`,
      item: `
        <div>
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "pinyinnumeric" }{{/helpers.highlight}}
          </div>
        </div>
      `,
    },
  }),
])

search.start()