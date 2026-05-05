let active_cat = ""

const services = {
  "brushing": [
    { title: "BRUSHING", duration: "60 min", price: "80 MAD" },
    { title: "BRUSHING WAVY", duration: "60 min", price: "120 MAD" }
  ],
  "coloration": [
    { title: "Full Color", duration: "90 min", price: "250 MAD" },
    { title: "Highlights", duration: "120 min", price: "350 MAD" }
  ],
  "soin-cheveux-extensions": [
    { title: "Soin Hydratant Cheveux", duration: "90 min", price: "200 MAD" },
    { title: "Soin Lissant", duration: "60 min", price: "300 MAD" },
    { title: "Soin Tokyo", duration: "100 min", price: "350 MAD" }
  ],
  "beau-regard-soin-cils": [
    { title: "Soin Cils", duration: "30 min", price: "50 MAD" },
    { title: "Pose Cils", duration: "45 min", price: "80 MAD" },
    { title: "Teinture Cils", duration: "20 min", price: "40 MAD" }
  ],
  "soin-visage": [
    { title: "Nettoyage Visage", duration: "60 min", price: "120 MAD" },
    { title: "Soin Hydratant Visage", duration: "45 min", price: "100 MAD" },
    { title: "Masque Purifiant", duration: "30 min", price: "80 MAD" }
  ],
  "atelier-russe": [
    { title: "Pose Atelier Russe", duration: "90 min", price: "150 MAD" },
    { title: "Remplissage Atelier Russe", duration: "60 min", price: "120 MAD" }
  ],
  "massages": [
    { title: "Massage Relaxant", duration: "60 min", price: "180 MAD" },
    { title: "Massage Californien", duration: "75 min", price: "220 MAD" },
    { title: "Massage Pierres Chaudes", duration: "90 min", price: "280 MAD" }
  ],
  "hammam": [
    { title: "Hammam Traditionnel", duration: "45 min", price: "100 MAD" },
    { title: "Hammam + Gommage", duration: "75 min", price: "150 MAD" },
    { title: "Hammam Complet", duration: "90 min", price: "200 MAD" }
  ]
};

let arrow = null
let dropdowns = document.querySelectorAll(".dropdown")
for (let dropdown of dropdowns) {
    let a = dropdown.firstElementChild 
    a.addEventListener("click", function(event) {
        event.preventDefault();
        
        if (active_cat) {
            document.querySelector(`a[data-srvc='${active_cat}'] + .items`).textContent = ""
            arrow.classList.toggle('rotate-180')
            if (a.getAttribute("data-srvc") == active_cat) {
                active_cat = ""
                return;
            }
        }

        arrow = a.querySelector(".icon > img")
        active_cat = a.getAttribute("data-srvc")
        let cat_services = services[active_cat]
        let items = dropdown.querySelector('.items');
        if (!cat_services) {return}
        items.textContent = ""
        
        arrow.classList.toggle('rotate-180')
        for (let cat_service of cat_services) {
            let item = document.createElement("div") 
            item.classList.add("item","flex","items-center","justify-between")

            let left = document.createElement("div")
            left.classList.add("left")
            let title = document.createElement("div")
            title.classList.add("title")
            title.textContent = cat_service.title
            let duration = document.createElement("div")
            duration.classList.add("duration")
            duration.textContent = cat_service.duration
            left.appendChild(title);left.appendChild(duration)

            let right = document.createElement("div")
            right.classList.add("right")
            let price = document.createElement("div")
            price.classList.add("price")
            price.textContent = cat_service.price
            right.appendChild(price)

            item.appendChild(left);item.appendChild(right)

            items.append(item)
        }

    })
}