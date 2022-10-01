// Here the background-color of list items will be yellow (By class name)
// here bg color of new last item will not be updated as it has diff class name
// let listitems=document.getElementsByClassName('list-group-item')

// for (let li of listitems){
// li.style.backgroundColor='palegoldenrod'
// }

// changing bg color of list item via tag name

let li=document.getElementsByTagName('li')

for (let i of li){
i.style.backgroundColor='palegoldenrod'
}