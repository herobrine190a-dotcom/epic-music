
const searchInput =
document.getElementById("searchInput");

const cards =
document.querySelectorAll(".card");

const buttons =
document.querySelectorAll(".category-btn");

let currentCategory = "all";


buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentCategory =
        button.dataset.category;

        filterSongs();

    });

});


searchInput.addEventListener("keyup", () => {

    filterSongs();

});

function filterSongs(){

    const value =
    searchInput.value.toLowerCase();

    cards.forEach(card => {

        const text =
        card.innerText.toLowerCase();

        const category =
        card.dataset.category;

        const matchesSearch =
        text.includes(value);

        const matchesCategory =
        currentCategory === "all" ||
        currentCategory === category;

        if(matchesSearch && matchesCategory){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

function openPlayer(videoId){

    document.getElementById("playerPopup").style.display = "flex";

    document.getElementById("youtubePlayer").src =
    "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

}

function closePlayer(){

    document.getElementById("playerPopup").style.display = "none";

    document.getElementById("youtubePlayer").src = "";

}