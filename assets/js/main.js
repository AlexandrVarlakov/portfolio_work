
let mobMenu = document.querySelector('.mob-menu__wrap');
let rollMenu = document.querySelector('.mob-menu__roll-btn');
let hamburger = document.querySelector('.nav__hamburger-container');

hamburger.onclick = function(){
    if ( mobMenu.getAttribute('data-state') == 'rolled' ){
        mobMenu.style.transform = 'translateY(0)';
        mobMenu.setAttribute('data-state', 'deployed');
    } else {
        mobMenu.setAttribute('data-state', 'rolled');
        mobMenu.style.transform = 'translateY(-150%)';
    }
    
    
}

rollMenu.onclick = function(){
    mobMenu.style.transform = 'translateY(-150%)';
    mobMenu.setAttribute('data-state', 'rolled');
}

let hourE = document.getElementById('hour');
let minuteE = document.getElementById('minute');
let secondE = document.getElementById('second');

let hour = +hourE.innerHTML;
let minute = +minuteE.innerHTML;
let second = +secondE.innerHTML;

let interval = setInterval(function(){
    second--;
    if ( second < 0) {
        second = 59;
        minute--;
        if ( minute < 0){
            minute = 59;
            hour--;

            if ( hour < 0 ) {
                clearTimeout(interval);
            }
        }
    }

    if ( second == 0 ){
        secondE.innerHTML = '00';
    } else {
        secondE.innerHTML = second;
    }
    if ( minute == 0 ){
        minuteE.innerHTML = '00';
    } else {
        minuteE.innerHTML = minute;
    }

    if ( hour == 0 ){
        hourE.hourHTML = '00';
    } else {
        hourE.innerHTML = hour;
    }

}, 1000)

let endAction = "21:00:00";