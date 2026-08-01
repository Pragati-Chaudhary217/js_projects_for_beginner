const note = document.getElementById('note');
const pswd = document.getElementById('password');
const button = document.getElementById('submit');

function check_upper(){
    let char="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let flag=false;
    for(const c of char){
        if (pswd.value.includes(c)){
            flag=true;
        }
    }
    return flag;
}
function check_lower(){
    let char="abcdefghijklmnopqrstuvwxyz";
    let flag=false;
    for(const c of char){
        if (pswd.value.includes(c)){
            flag=true;
        }
    }
    return flag;
}
function check_num(){
    let char="1234567890";
    let flag=false;
    for(const c of char){
        if (pswd.value.includes(c)){
            flag=true;
        }
    }
    return flag;
}
function check_chr(){
    let char="!@#$%^&*?|'\"`~;";
    let flag=false;
    for(const c of char){
        if (pswd.value.includes(c)){
            flag=true;
        }
    }
    return flag;
}

function rules(){
    if (pswd.value.length>=8){
        if(check_upper()){
            if(check_lower()){
                if(check_num()){
                    if(check_chr()){
                        note.textContent="Strong Password"
                    }
                    else{
                        note.textContent="Password should contain atleast one special charecter."
                    }
                }
                else{
                    note.textContent="Password should contain a number."
                }
            }
            else{
                note.textContent="Password should contain atleast one lower case letter"
            }
        }
        else{
            note.textContent="Password should contain atleast one upper case letter"
        }
    }
    else{
        note.textContent="Password length should be grater than 7"
    }
}
button.addEventListener('click',rules);