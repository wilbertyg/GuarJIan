let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');

hamburger.addEventListener("click", e => {
    menu.classList.toggle('reveal');
})

function go_shop() {
    window.location = 'promotion.html';
} 

function go_shop2() {
    window.location = 'product.html';
} 

function countDot(email) {
    var x = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '.') {
            x++;
        }
    }
    if (x <= 0) {
        return false
    } else if (x > 2) {
        return false
    }
    return true
}

function checkName(name) {
    str = String(name);
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            return true
        }
    }
    return false
}

function validation() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let address = document.getElementById('address').value
    const checkbx = document.querySelector('#checkbox')

    if (name === '') {
        alert('Name cannot be empty')
        return
    } else if (name.length < 3) {
        alert('Name is too short')
        return
    } else if (checkName(name)) {
        alert('Input your name correctly')
        return
    } else if (email === '') {
        alert('Email cannot be empty')
        return
    } else if (email.length < 5) {
        alert('Email is too short')
        return
    } else if (email.indexOf('@') > email.indexOf('.') || email.indexOf('@') < 0 || !countDot(email)) {
        alert('Incorrect email')
        return
    } else if (password === '') {
        alert('Fill your password')
        return
    } else if (password.length < 5) {
        alert('Password is too short')
        return
    } else if (address.length < 13) {
        alert('Please write your address correctly')
        return
    } else if (!checkbx.checked) {
        alert('User must agree')
        return
    } 
    alert('Successfully submitted')
    console.log('sent')
    return
}

