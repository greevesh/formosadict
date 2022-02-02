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
  searchClient: searchClient,
  searchFunction(helper) {
    const container = document.querySelector('#hits');
    container.style.display = helper.state.query === '' ? 'none' : '';
    helper.search();
  }
})

search.addWidgets([
  searchBox({
    container: '#searchbox',
    placeholder: 'Translate English, Pinyin, Traditional or Simplified Chinese'
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
            {{#helpers.highlight}}{ "attribute": "traditional" }{{/helpers.highlight}}
            {{#helpers.highlight}}{ "attribute": "pinyinDiacritic" }{{/helpers.highlight}}
            {{#helpers.highlight}}{ "attribute": "definitions" }{{/helpers.highlight}}
          </div>
        </div>
      `,
    },
  }),
])

search.start()