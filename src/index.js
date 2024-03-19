// index.js

// Callbacks

const handleClick = (ramen) => {
  document.querySelector(".detail-image").src = ramen.image;
  document.querySelector(".name").textContent = ramen.name;
  document.querySelector(".restaurant").textContent = ramen.restaurant;
  document.querySelector("#rating-display").textContent = ramen.rating;
  document.querySelector("#comment-display").textContent = ramen.comment;
};



const addSubmitListener = () => {
  document.querySelector("#new-ramen").addEventListener("submit", event =>{
    event.preventDefault();
    fetch("http://localhost:3000/ramens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
            "Accept": "application/json"
      },
      body: JSON.stringify({
        name: document.querySelector("#new-ramen").name.value,
        restaurant:document.querySelector("#new-ramen").restaurant.value,
        image:document.querySelector("#new-ramen").image.value,
        rating:document.querySelector("#new-ramen").rating.value,
        comment:document.querySelector("#new-ramen").comment,
        
      })
    })
    .then(response => response.json())
 .then(newRamen=>{
   const img= document.createElement("img");
    img.src = newRamen.image;
    img.setAttribute("id", newRamen.id)
    document.querySelector("#ramen-menu").append(img);
    
  })

  })
  
  }



  

const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(ramens =>{
    ramens.forEach(ramen=>{
      const image = document.createElement("img");
      image.src = ramen.image;
      image.setAttribute("id", ramen.id)
      document.querySelector("#ramen-menu").append(image);
    })
   handleClick(ramens[0]);
   const image = document.getElementById("ramen-menu");
   image.addEventListener("click", event =>{
    ramens.forEach(ramen =>{
      if (ramen.id == event.target.id)
      handleClick(ramen)
    })
   })
}
  )}
const main = () => {
  document.addEventListener("DOMContentLoaded", displayRamens())
  document.addEventListener("DOMContentLoaded", addSubmitListener())
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
