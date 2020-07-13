{
    'use strict';

    // document.getElementById('test-button').addEventListener('click', function () {
    //     const links = document.querySelectorAll('.titles a');
    //     console.log('links:', links);
    // });

    // const titleClickHandler = function (event) {
    //     event.preventDefault();
    //     const clickedElement = this;
    //     console.log('Link was clicked!');
    //     console.log('clickedElement (with plus): ' + clickedElement);

    //     /* [DONE] remove class 'active' from all article links  */
    //     const activeLinks = document.querySelectorAll('.titles a.active');
    //     for (let activeLink of activeLinks) {
    //         activeLink.classList.remove('active');
    //     }

    //     /* [IN PROGRESS] add class 'active' to the clicked link */
    //     clickedElement.classList.add('active');



    //     /* [DONE] remove class 'active' from all articles */
    //     const activeArticles = document.querySelectorAll('.posts .post.active');
    //     for (let activeArticle of activeArticles) {
    //         activeArticle.classList.remove('active');
    //     }
    //     /* get 'href' attribute from the clicked link */
    //     const articleSelector = clickedElement.getAttribute('href');
    //     console.log(articleSelector);

    //     /* find the correct article using the selector (value of 'href' attribute) */
    //     const targetArticle = document.querySelector(articleSelector);
    //     console.log(targetArticle);


    //     /* add class 'active' to the correct article */
    //     targetArticle.classList.add('active');
    // }

    // const links = document.querySelectorAll('.titles a');

    // for (let link of links) {
    //     link.addEventListener('click', titleClickHandler);
    // }

    // const links = document.querySelectorAll('.titles a');
    // for (let link of links) {
    //     console.log(link);
    // }


    const titleClickHandler = function (event) {
        event.preventDefault()
        console.log('Link was clicked!');
        const clickedElement = this;
        // console.log(event);
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

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }

    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles',
        titleList = document.querySelector(optTitleListSelector);
    console.log(optTitleListSelector);



    function generateTitleLinks() {

        /* remove contents of titleList */

        function clearMessages() {
            titleList.innerHTML = '';
        }
        clearMessages();


        /* for each article */

        /* get the article id */

        /* find the title element */

        /* get the title from the title element */

        /* create HTML of the link */

        /* insert link into titleList */

    }

    generateTitleLinks();





}