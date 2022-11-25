class Posts{
    constructor(title,description,author){
        this.title=title
        this.description=description
        this.author=author
    }
    printPost(){
        console.log(this.title,this.description,this.author);
    }
}
var obj= new Posts("post","new post","ram")
console.log(obj.printPost());





// var obj= new Posts()
// obj.setPost("new post","this my initial post","ram")
// obj.printPost()
// console.log(obj.author);