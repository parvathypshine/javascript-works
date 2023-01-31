class TodoList{
    getAllLIst(){
        return fetch(`https://jsonplaceholder.typicode.com/todos`)
    }
    
}

var list=TodoList()

function displayList(){
    
}