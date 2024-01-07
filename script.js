let cards = document.querySelector(".cards");
let button = document.querySelector("button");

let nav = document.querySelector(".nav")
let hamburger = document.querySelector(".hamburger")
let hamburgerbefore = document.querySelector(".hamburgerbefore")

hamburger.addEventListener("click", () => {
    console.log("hi")

    nav.classList.toggle("navi")
    hamburger.classList.toggle("hamburgerto")
    hamburgerbefore.classList.toggle("hamburgerafter")

})


function fetch_product() {
    fetch("https://fakestoreapi.com/products")


        .then(response => { return response.json() })
        .then(data => {
            for (item of data) {

                let card = document.createElement('div');
                card.classList.add("card");
                cards.appendChild(card);


                let img = document.createElement('img')
                img.src = item.image

                card.appendChild(img)


                let title = document.createElement("p")
                title.classList.add("title")
                title.innerText = item.title
                card.appendChild(title)


                let con = document.createElement('div')
                con.textContent = "Price $" + item.price
                card.appendChild(con)

                let rating = document.createElement("p")
                rating.innerText = "Rating  " + item.rating.rate
                card.appendChild(rating)
            }


        })
}
fetch_product();
