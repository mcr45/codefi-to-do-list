

const addButton=document.querySelector('#add_task')
addButton.addEventListener('click',newTodo)
let count=0

function newTodo(e){
    e.preventDefault()
    const list=document.querySelector('.list_items')
    const task=document.querySelector('#task')
    if(!task.value){ alert('cannot insert blank space') 
    return}
    let p=document.createElement('p')
    let recap=document.querySelector('.recap p')
    p.innerText=task.value
    recap.innerText=`you have ${++count} task`
    list.appendChild(p)
    task.value=''

}





