import './main.css'
import './random-translation.js'
import { MeiliSearch } from 'meilisearch'
import translations from './translations.json' 
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import instantsearch from 'instantsearch.js'
import { searchBox, hits } from 'instantsearch.js/es/widgets/index.js'

;(async () => {
  const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700'
  })

  // An index is where the documents are stored.
  const index = client.index('translations')

  // If the index 'movies' does not exist, Meilisearch creates it when you first add the documents.
  let response = await index.addDocuments(translations)

  console.log(response) // => { "uid": 0 }
})()

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
    const labels = document.querySelector('.labels')
    const container = document.querySelector('#hits')
    labels.style.display = helper.state.query === '' ? 'none' : 'grid'
    container.style.display = helper.state.query === '' ? 'none' : ''
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
          <div class="hit-container">
            <div class="hit">
              {{#helpers.highlight}}{ "attribute": "traditional" }{{/helpers.highlight}}
            </div>
            <div class="hit">
              {{#helpers.highlight}}{ "attribute": "pinyinDiacritic" }{{/helpers.highlight}}
            </div>
            <div class="hit">
              {{#helpers.highlight}}{ "attribute": "definitions" }{{/helpers.highlight}}
            </div>
            <div class="hit">
              {{#helpers.highlight}}{ "attribute": "simplified" }{{/helpers.highlight}}
            </div>
          </div>
        </div>
      `,
    },
  }),
])

search.start()