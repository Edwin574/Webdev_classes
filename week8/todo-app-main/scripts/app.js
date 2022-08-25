const newtask = document.getElementById('new-task')
const taskList = document.getElementById('task-list')
const temorary=document.getElementById('temp')
const modeButton = document.querySelector('.mode')
const body=document.querySelector('body')
console.log(body)
modeButton.addEventListener('click', (e) => {
    const theme = e.target.id
    console.log(theme)
    switch (theme) {
        case 'light':
            body.classList.add('light')
            break;
        case 'dark':
            body.classList.remove('light')
            break;
   }
})

newtask.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        const listItem = document.createElement('div')
        // listItem.classList.add('list-item-div')
        listItem.setAttribute('class','list-item-div d-flex flex-row ')
        listItem.innerHTML = `<input type='checkbox' class='check-item'/>
        <p id='individual-item' class='strike'>${newtask.value}</p>
        <img src='./images/icon-cross.svg' class='delete-item' ?/>`
        // console.log(listItem)
        taskList.append(listItem)
        newtask.value = null
        const deleteButton = listItem.querySelector('.delete-item')
    //     const deleteButton = taskList.querySelectorAll('.delete-item')
    //     const deleteArray=Array.from(deleteButton)

    //     deleteArray.forEach(item => {
    //         item.addEventListener('click', (e) => {
    //             const parent = e.target.parentElement
    //             parent.remove()
               
    //        })
    //    })


        deleteButton.addEventListener('click', function () {
            listItem.remove()
            
        })
       
        // const task = document.createElement('p')
        // task.innerHTML = newtask.value
        // taskList.append(task)

        // console.log(task)

        //  task.addEventListener('click', function () {

        //     task.classList.toggle('strike')

        //  })
        // task.addEventListener('dblclick', function () {

        //     this.remove(task)

        // })
    }
})
