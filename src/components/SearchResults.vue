<script>
import { MeiliSearch } from "meilisearch";
import translations from "../../translations/translations.json";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import instantsearch from "instantsearch.js";
import { searchBox, hits } from "instantsearch.js/es/widgets/index.js";
(async () => {
  const client = new MeiliSearch({
    host: "https://app-meilisearchformosadict-prod-001.azurewebsites.net/",
  });

  // An index is where the documents are stored.
  const index = client.index("translations");

  // If the index 'movies' does not exist, Meilisearch creates it when you first add the documents.
  let response = await index.addDocuments(translations);

  console.log(response); // => { "uid": 0 }
})();

const searchClient = instantMeiliSearch("https://app-meilisearchformosadict-prod-001.azurewebsites.net/", {
  paginationTotalHits: 30, // default: 200.
  placeholderSearch: false, // default: true.
  primaryKey: "id", // default: undefined
});

const search = instantsearch({
  indexName: "translations",
  searchClient: searchClient,
  searchFunction(helper) {
    const body = document.querySelector("body");
    const labels = document.querySelector(".labels");
    const hitsContainer = document.querySelector("#hits");
    const secondaryContent = document.querySelector(".secondary-content");
    if (helper.state.query !== "") {
      body.style.overflowX = "hidden";
      labels.style.display = "grid";
      hitsContainer.style.display = ""; // sets to default display
      secondaryContent.style.marginTop = "50px";
    } else {
      labels.style.display = "none";
      hitsContainer.style.display = "none";
      secondaryContent.style.marginTop = "200px";
    }
    helper.search();
  },
});

window.addEventListener("DOMContentLoaded", () => {
  search.addWidgets([
    searchBox({
      container: "#searchbox",
      placeholder:
        "Translate English, Pinyin, Traditional or Simplified Chinese",
    }),
    hits({
      container: "#hits",
      templates: {
        empty: `{{#query}}
          <p class="no-results-msg">Sorry! No results found. 🙈 Feel free to suggest a word below.</p>
          <style>.labels { display: none !important; }</style>
        {{/query}}
        `,
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
  ]);

  search.start();
});
</script>

<template>
  <div id="searchbox-container">
    <div id="searchbox"></div>
  </div>
   <!-- still need to upgrade to Vue 3 InstantSearch -->
  <div id="hits"></div>
</template>

<style lang="scss">
#searchbox-container {
  display: flex;
  justify-content: center;
}

#searchbox {
  display: flex;
  justify-content: center;
  width: 100%;
}

.ais-SearchBox-input {
  width: 720px;
  border: 2px #d7dbdb solid;
}

// .ais-SearchBox-input:focus {
//     border: 2px red solid !important;
// }

.ais-SearchBox-submit,
.ais-SearchBox-reset {
  display: none;
}

.ais-Hits-item {
  height: 100px;
}

.ais-Hits {
  background-color: #fff;
  margin-top: -106px;
}

.ais-Hits-list {
  list-style: none;
}

.no-results-msg {
  text-align: center;
  background-color: #f5fdfc;
  font-size: 20px;
  margin-top: 190px;
}

.hit-container {
  display: grid;
  grid-template-columns: 15vw 70vw 25vw 1fr;
  font-size: 24px;
  font-weight: 500;

  /* traditional */
  .hit:nth-child(1) {
    grid-column: 1 / 2;
    margin-top: 15px;
    font-size: 18px;
  }

  /* pinyin */
  .hit:nth-child(2) {
    grid-column: 1 / 2;
    font-size: 18px;
    margin-top: 7px;
    color: #7b7d80;
  }

  /* definition */
  .hit:nth-child(3) {
    grid-column: 2 / 3;
    margin-top: -15px;
    font-size: 19px;
  }

  /* simplified */
  .hit:nth-child(4) {
    grid-column: 3 / -1;
    margin-top: -13px;
    font-size: 18px;
    display: block;
  }
}

/* highlighted word */
.ais-Highlight-highlighted {
  background-color: #b5e0bb;
}

@media (max-width: 1150px) {
  .no-results-msg {
    margin-top: 100px;
  }
}

@media (max-width: 900px) {
  .hit-container {
    grid-template-columns: 12vw 62vw 25vw 1fr;
  }

  .hit:nth-child(3) {
    margin-left: 25px;
  }

  .hit:nth-child(4) {
    margin-left: 28px;
  }
}
@media (max-width: 600px) {
  .hit-container {
    grid-template-columns: 15vw 45vw 25vw 1fr;
  }

  .hit {
    margin-top: 20px;
  }

  .hit:nth-child(1),
  .hit:nth-child(2) {
    font-size: 15px !important;
    margin-left: -33px;
  }

  .hit:nth-child(3) {
    font-size: 15px !important;
    margin-left: 0px;
  }

  .hit:nth-child(4) {
    margin-left: 22px;
  }
}

@media (max-width: 400px) {
  .hit-container {
    margin-top: -16px;
  }

  .hit:nth-child(2) {
    width: 150%;
  }

  .hit:nth-child(3) {
    font-size: 13px !important;
    margin-left: -6px;
  }

  .hit:nth-child(4) {
    margin-left: 20px;
    font-size: 15px !important;
  }
}
</style>
