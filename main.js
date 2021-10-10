var user = [
    {
        username : "student",
        password : "student"
    }
]
function createQuestion(){
    var value = document.getElementById('Question').value;
    window.localStorage.setItem("Question",value);

}


