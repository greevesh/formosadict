import './style.css'
import { MeiliSearch } from 'meilisearch'

const client = new MeiliSearch({ host: 'http://127.0.0.1:7700' })

import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import instantsearch from 'instantsearch.js'
import { searchBox, hits } from 'instantsearch.js/es/widgets'

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
      item: `
        <div>
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "traditional" }{{/helpers.highlight}}
          </div>
        </div>
      `,
    },
  }),
])

search.start()
