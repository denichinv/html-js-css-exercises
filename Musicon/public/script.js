window.onload = addElement;

function addElement() {

  const newArticle = document.createElement("article");
 
  const newContent = document.createTextNode(
    "Some items are currently not in stock.Please contact us for more information!"
  );

  //style
  newArticle.style.backgroundColor = "pink";
  newArticle.style.textAlign = "center";
  newArticle.style.fontSize = "larger";
  newArticle.style.color = "black";
  newArticle.style.fontWeight = "550";
  newArticle.style.fontStyle = "italic";


  newArticle.appendChild(newContent);


  //   const currentArticle = document.querySelector("#showcase");

  //   document.body.insertBefore(newArticle, currentArticle);

  const article = document.querySelector("#information");
  article.appendChild(newArticle);
}
