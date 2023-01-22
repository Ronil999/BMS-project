class password{
    constructor(uname,passwd){
        this.uname = uname;
        this.passwd = passwd;
    }
    checkpwdd(){
        if(user == this.uname && pass == this.passwd){
            // document.getElementById("err").innerHTML = "Successfully Login";
            // console.log("login");
            window.location.href = 'BMS-project/admin/admin.html';
        }
        else{
            document.getElementById("err").innerHTML = "Wrong Password!  Try again!!";
            // console.log("not login");
        }
    }
};

var user;
var pass;

function ru() {
    user = document.getElementById("un").value;
    console.log(user);
}

function rp() {
    pass = document.getElementById("pwd").value;
    console.log(pass);
}

// console.log(passwd);    

const pd = new password("admin","admin");

function checkpwd() {
    
    pd.checkpwdd();
}

