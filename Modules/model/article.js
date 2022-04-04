class Article {
    constructor(title , content){
        this.title = title;
        this.content = content;
        this.id = sha256(Math.random().toString())
    }
}

export default Article;
// named export 
// default export