//You can edit ALL of the code here
//Variables
const rootElem = document.getElementById("root");
let searchBox = document.getElementById("search");
const allEpisodes = getAllEpisodes();
const selectEpisode = document.getElementById("allEpisodes");
function setup() {
  makePageForEpisodes(allEpisodes);
  listEpisodes(allEpisodes);
  // Item search function by using an event Listener
  searchBox.addEventListener("input", () => {
    let resultNumber = document.getElementById("resultNumber");
    let results = allEpisodes.filter(containsSearchTerm);
    makePageForEpisodes(results);
    resultNumber.innerText = `${results.length} / ${allEpisodes.length}`;
    if (searchBox.value.length == 0) {
      resultNumber.innerText = "";
    }
  });
  selectEpisode.addEventListener("change", () => {
    if (selectEpisode.value === "novalue") {
      makePageForEpisodes(allEpisodes);
    } else {
      let result = allEpisodes.find((episode) => {
        return episode.id == selectEpisode.value;
      });
      makePageForEpisodes(result);
    }
  });
}
]