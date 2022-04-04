import Article from "../model/article.js";
class ArticleController {
    articleList = [];
    
    save(obj){
        const article = new Article(obj.title , obj.content);
        this.articleList.push(article);
        console.log(this.articleList);
    };
}

const aController = new ArticleController

export default aController;