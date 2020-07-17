{
  'use strict';
  const titleClickHandler = function (event) {
    event.preventDefault();
    // console.log('Link was clicked!');
    const clickedElement = this;
    // console.log('clickedElement (with plus): ' + clickedElement);

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
      // console.log(activeArticle);
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    // console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    // console.log(targetArticle);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');

  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';



  function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector); // Przenioslem te stala do ciala funkcji
    titleList.innerHTML = '';
    console.log('to jest customSelector:' + customSelector);
    /* for each article */
    let html = '';
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log('to jest customSelector:' + customSelector);
    console.log(articles + customSelector);
    for (const article of articles) {
      /* get the article id */
      const articleID = article.getAttribute('id');
      // console.log('ID arykulu: ' + articleID);
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      // console.log('Tytul artykulu: ' + articleTitle);
      /* get the title from the title element */
      const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
      // console.log('Link HTML: ' + linkHTML);
      /* create HTML of the link */
      // titleList.insertAdjacentHTML('beforeend', linkHTML); // Mozna uzyc zamiast titleList.innerHTML = html;
      /* insert link into titleList */
      html = html + linkHTML;
    }
    titleList.innerHTML = html;
    // console.log(html);

    const links = document.querySelectorAll('.titles a');
    // console.log(links);
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();

  function generateTags() {

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log('articles:' + articles);
    /* START LOOP: for every article: */
    for (const article of articles) {
      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      console.log(tagsWrapper);
      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      // console.log(articleTags);
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      // console.log(articleTagsArray);
      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        // console.log(tag);
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
        console.log(linkHTML);
        /* add generated code to html variable */
        html = html + linkHTML;
        // console.log(html);
        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
      // console.log(tagsWrapper);

      /* END LOOP: for every article: */
    }

  }
  generateTags();

  function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    console.log(event);

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log(clickedElement);
    console.log('clickedElement (with plus): ' + clickedElement);

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag);

    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTags);

    /* START LOOP: for each active tag link */
    for (let activeTag of activeTags) {
      /* remove class active */
      activeTag.classList.remove('active');
      /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log(tagLinks);
    /* START LOOP: for each found tag link */
    for (let tagLink of tagLinks) {
      /* add class active */
      tagLink.classList.add('active');
      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }


  function addClickListenersToTags() {
    /* find all links to tags */
    const linksToTags = document.querySelectorAll('a[href^="#tag-"]');
    console.log(linksToTags);
    /* START LOOP: for each link */
    for (const linkToTag of linksToTags) {
      /* add tagClickHandler as event listener for that link */
      linkToTag.addEventListener('click', tagClickHandler);
      console.log('linkToTag: ' + linkToTag);
      /* END LOOP: for each link */
    }
  }
  addClickListenersToTags();


  function generateAuthors() {
    const articles = document.querySelectorAll(optArticleSelector);
    // console.log(articles);
    for (const article of articles) {
      const authorsWrapper = article.querySelector(optArticleAuthorSelector);
      // console.log('authorsWrapper: ' + authorsWrapper);
      let html = '';
      const tagsAuthor = article.getAttribute('data-author');
      console.log(tagsAuthor);
      const linkHTML = '<a href="#author-' + tagsAuthor + '">' + tagsAuthor + '</a>';
      // console.log('linkHTML do tagsAuthor: ' + linkHTML);
      html = html + linkHTML;
      console.log(html);
      authorsWrapper.innerHTML = html;
    }
  }
  generateAuthors();

  function authorClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log(clickedElement);
    console.log('clickedElement (with plus): ' + clickedElement);

    const href = clickedElement.getAttribute('href');
    console.log(href);

    const author = href.replace('#author-', '');
    console.log('Autor:' + author);

    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
    console.log(activeAuthors);

    for (let activeAuthor of activeAuthors) {
      activeAuthor.classList.remove('active');
    }

    const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
    for (let authorLink of authorLinks) {
      authorLink.classList.add('active');
    }
    generateTitleLinks('[data-author="' + author + '"]');
  }

  function addClickListenersToAuthors() {
    const linksToAuthors = document.querySelectorAll('a[href^="#author"]');
    console.log(linksToAuthors);
    for (let linkToAuthor of linksToAuthors) {
      linkToAuthor.addEventListener('click', authorClickHandler);
      console.log('linkToAuthor: ' + linkToAuthor);
    }
  }
  addClickListenersToAuthors();


}
