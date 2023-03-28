let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

localStorage.setItem( ('myLeads'), JSON.stringify(myLeads) )
    renderLeads()
    console.log( localStorage.getItem("myLeads") )
})

 function renderLeads() {
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
    <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]}
    </a>
    </li>`
 
}   
ulEl.innerHTML =listItems
 }


//localStorage.setItem("myName", "Per Harald Borgen")

//let name = localStorage.getItem("myName")
//console.log(name)

 //localStorage.clear()

 


 


