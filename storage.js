function addonLocal() {
    const user = document.getElementById('user');
    let id = user.value
    const ValueInput = document.getElementById('value');
    let value = ValueInput.value


    // add local storage
    if(id&&value){
        localStorage.setItem(id, value)
    }


    user.value = '';
    ValueInput.value= '';



}