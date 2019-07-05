//html interation
'use strict';

//event listeners
document.getElementById('android-btn').addEventListener('click', android);
document.getElementById('apple-btn').addEventListener('click', apple);

//functions

function android(){
    //change logo
    document.getElementById('logo').src = 'images/Android-Logo.jpg';

    //explore debate to android home
    document.getElementById('explore').innerHTML = 'Android Home';

    //change color
    document.getElementById('explore').style.backgroundColor = '#a4c93b';

    //change link

    document.getElementById('explore').href = 'https://www.android.com/';

    //change body bg
    document.body.style.backgroundColor = '#a4c93b';
}

function apple(){
    //change logo
    document.getElementById('logo').src = 'images/Apple-Logo.jpg';

    //explore debate to apple home
    document.getElementById('explore').innerHTML = 'Apple Home';

    //change color
    document.getElementById('explore').style.backgroundColor = '#b6bcca';

    //change link

    document.getElementById('explore').href = 'https://www.apple.com/';

    //change body bg
    document.body.style.backgroundColor = '#b6bcca';
}