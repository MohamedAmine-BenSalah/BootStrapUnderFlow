var user = [
    {
        username : "student",
        password : "student"
    }
]
function getInfo(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('pwd').value
}
function createQuestion(){
    var value = document.getElementById('Question').value;
    window.localStorage.setItem("Question",value);

}


