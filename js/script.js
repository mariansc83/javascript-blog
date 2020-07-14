{
    'use strict';
    const titleClickHandler = function (event) {
        event.preventDefault()
        console.log('Link was clicked!');
        const clickedElement = this;
        console.log('clickedElement (with plus): ' + clickedElement);

        /* remove class 'active' from all article links  */
        const activeLinks = document.querySelectorAll('.titles a.active');

        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }

        /* add class 'active' to the clicked link */
        clickedElement.classList.add('active');

        /* remove class 'active' from all articles */
        const activeArticles = document.querySelectorAll('.posts .post.active');

        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
            console.log(activeArticle);
        }

        /* get 'href' attribute from the clicked link */
        const articleSelector = clickedElement.getAttribute('href');
        console.log(articleSelector);

        /* find the correct article using the selector (value of 'href' attribute) */
        const targetArticle = document.querySelector(articleSelector);
        console.log(targetArticle);

        /* add class 'active' to the correct article */
        targetArticle.classList.add('active');

    }

    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';



    function generateTitleLinks() {

        /* remove contents of titleList */
        const titleList = document.querySelector(optTitleListSelector); // Przenioslem te stala do ciala funkcji
        titleList.innerHTML = '';

        /* for each article */
        let html = '';
        const articles = document.querySelectorAll(optArticleSelector); // Przenioslem te stala do ciala funkcji
        for (const article of articles) {
            /* get the article id */
            const articleID = article.getAttribute('id');
            console.log('ID arykulu: ' + articleID);
            /* find the title element */
            const articleTitle = article.querySelector(optTitleSelector).innerHTML;
            console.log('Tytul artykulu: ' + articleTitle);
            /* get the title from the title element */
            const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
            console.log('Link HTML: ' + linkHTML);
            /* create HTML of the link */
            titleList.insertAdjacentHTML('beforeend', linkHTML);
            /* insert link into titleList */
            html = html + linkHTML;
        }
        titleList.innerHTML = html;
        console.log(html);

        const links = document.querySelectorAll('.titles a');
        console.log(links);
        for (let link of links) {
            link.addEventListener('click', titleClickHandler);
        }
    }

    generateTitleLinks();

}