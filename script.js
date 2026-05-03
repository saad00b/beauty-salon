const services = {
  "Brushing": [
    { title: "BRUSHING", duration: "60 min", price: "80 MAD" },
    { title: "BRUSHING WAVY", duration: "60 min", price: "120 MAD" }
  ],
  "Coloration": [
    { title: "Full Color", duration: "90 min", price: 250 },
    { title: "Highlights", duration: "120 min", price: 350 }
  ]
};

let dropdowns = document.querySelectorAll(".dropdown")
for (let dropdown of dropdowns) {
    let a = dropdown.firstElementChild 
    a.addEventListener("click", function(event) {
        event.preventDefault();
        let cat_services = services[a.firstElementChild.firstElementChild.textContent]
        let items = dropdown.querySelector('.items');
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

        console.log('The link was clicked!');
    })
}