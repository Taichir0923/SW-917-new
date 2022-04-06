import aController from "../controllers/article.js";

class ArticleView {
    title = document.querySelector("#title");
    content = document.querySelector("#content");
    btn = document.querySelector(".btn");
    constructor(){
        this.eventListener();
    }

    newArticle(){
        const formData = {
            title: this.title.value,
            content: this.content.value
        }

        aController.save(formData);
    }

    eventListener(){
        this.btn.addEventListener('click' , this.newArticle.bind(this));
    }
}

const app = new ArticleView();