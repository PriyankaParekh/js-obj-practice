  let items = [
    { name: "Laptop", category: "electronics", price: 999 },
    { name: "Mobile", category: "electronics", price: 800 },
    { name: "TV", category: "electronics", price: 9990 },
    { name: "T-shirt", category: "clothing", price: 20 },
    { name: "Pents", category: "clothing", price: 200 },
    { name: "Shorts", category: "clothing", price: 50 },
    { name: "Book", category: "books", price: 15 },
    { name: "pri", category: "books", price: 90 },
    { name: "may", category: "books", price: 150 },
  ];

function populate(filtered, items) {
    let itemList = document.getElementById("itemList");
        itemList.innerHTML = ""; 
        let newitem=items.filter((item)=>item.category===filtered);
        console.log(newitem);
        if(filtered==='all'){
            items.forEach(item => {
                let listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.innerHTML = `
                  <span>${item.name}</span>
                  <span class="badge badge-secondary">${item.category}</span>
                  <span class="badge badge-primary">$${item.price}</span>
                `;
                itemList.appendChild(listItem);
          })
        }
        newitem.forEach(item => {
          let listItem = document.createElement("li");
          listItem.classList.add("list-group-item");
          listItem.innerHTML = `
            <span>${item.name}</span>
            <span class="badge badge-secondary">${item.category}</span>
            <span class="badge badge-primary">$${item.price}</span>
          `;
          itemList.appendChild(listItem);
    })
}


function populatesort(filtered, items) {
    let itemList = document.getElementById("itemList");
        itemList.innerHTML = ""; 
        let newitem;
        if(filtered==='price'){
            console.log(filtered);
            items.sort((a, b) => a.price-b.price);
            console.log(items);
        } else if(filtered==='name'){
            console.log(filtered);
            items.sort((a, b) => a['name'].localeCompare(b['name']));
            console.log(items);
        }
        items.forEach(item => {
          let listItem = document.createElement("li");
          listItem.classList.add("list-group-item");
          listItem.innerHTML = `
            <span>${item.name}</span>
            <span class="badge badge-secondary">${item.category}</span>
            <span class="badge badge-primary">$${item.price}</span>
          `;
          itemList.appendChild(listItem);
    })
}


document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById('categoryFilter').addEventListener('click',(e)=>{
        let filtered=e.target.value;
        console.log(filtered);
        populate(filtered, items);
        
    });
    document.getElementById('sortCriteria').addEventListener('click',(e)=>{
        let filteredSort=e.target.value;
        console.log(filteredSort);
        populatesort(filteredSort, items);
        
    });
    populate('all', items);
  });
