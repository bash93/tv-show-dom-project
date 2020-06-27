//You can edit ALL of the code here
//Variables
const rootElem = document.getElementById("root");
let searchBox = document.getElementById("search");
const allEpisodes = getAllEpisodes();
const selectEpisode = document.getElementById("allEpisodes");
function setup() {
  makePageForEpisodes(allEpisodes);
  listEpisodes(allEpisodes);
  
// Episodes display function
function makePageForEpisodes(episodeList) {
  rootElem.innerHTML = ""; // Clearing the main container
  for (let i = 0; i < episodeList.length; i++) {
    // Variables to be used for each episode
    let episodeContainer = document.createElement("div"),
      episodeShadow = document.createElement("div"),
      episodeBody = document.createElement("div"),
      episodeTitle = document.createElement("div"),
      episodeN = document.createElement("div"),
      episodeNameCode = document.createElement("mediuem"),
      episodeImg = document.createElement("img"),
      episodeCode =
        "S" +
        episodeList[i].season.toString().padStart(2, "0") +
        "E" +
        episodeList[i].number.toString().padStart(2, "0");
    // adding classes to style the page.
    episodeContainer.classList.add("col-md-4");
    episodeShadow.classList.add("card", "mb-4", "shadow-sm");
    episodeImg.classList.add("bd-placeholder-img", "card-img-top");
    episodeBody.classList.add("card-body");
    episodeTitle.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    episodeN.classList.add("btn-group", "name");
    episodeNameCode.classList.add("text-muted");
    episodeNameCode.id = "episodeNameCode";
    episodeTitle.id = "title";
    episodeTitle.append(episodeN, episodeNameCode);
    episodeNameCode.innerText = episodeCode;
    episodeN.innerText = episodeList[i].name;
    episodeBody.innerHTML = episodeList[i].summary;
    episodeImg.src = episodeList[i].image.medium;
    episodeShadow.append(episodeTitle, episodeImg, episodeBody);
    episodeContainer.append(episodeShadow);
    rootElem.append(episodeContainer);
  }
}
// Episode code and name function declaration
function listEpisodes(episodes) {
  for (let i = 0; i < episodes.length; i++) {
    let episodeCode =
      "S" +
      episodes[i].season.toString().padStart(2, "0") +
      "E" +
      episodes[i].number.toString().padStart(2, "0");
    let dropDownOption = document.createElement("option");
    dropDownOption.value = episodes[i].id;
    dropDownOption.innerText = `${episodeCode} - ${episodes[i].name}`;
    selectEpisode.appendChild(dropDownOption);
  }
}
function containsSearchTerm(episode) {
  return (
    episode.summary.toLowerCase().includes(searchBox.value.toLowerCase()) ||
    episode.name.toLowerCase().includes(searchBox.value.toLowerCase())
  );
}
window.onload = setup;
