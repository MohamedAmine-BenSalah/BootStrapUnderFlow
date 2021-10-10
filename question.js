
function getQu(){
    const Question = window.localStorage.getItem("Question");
console.log(Question); // checking
var questionarea = document.getElementById('Question');
questionarea.innerHTML = Question.toString();
console.log(questionarea);
var commentarea = document.getElementById('comments');
var comments = JSON.parse(localStorage.getItem("comments") || "[]");
      comments.map((cmt) => {
        var newComment = document.createElement("p");
        newComment.innerHTML = cmt;
        commentarea.appendChild(newComment);
      });
}
function createCom(){
    const value = document.getElementById('comment').value;
  console.log(value) //checking
    var commentarea = document.getElementById('comments');
    const newComment = document.createElement('p');
    newComment.innerHTML = value;
    commentarea.appendChild(newComment);
    var comments = JSON.parse(
        window.localStorage.getItem("comments") || "[]"
      );

   
      comments.push(value);
      window.localStorage.setItem("comments", JSON.stringify(comments));

}

