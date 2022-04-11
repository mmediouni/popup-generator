var sites = [
    'http://www.ly.digital-cook.me/project/banque/',
    'http://www.ly.digital-cook.me/project/assurance/',
    'http://www.ly.digital-cook.me/project/energie/',
    'http://www.ly.digital-cook.me/project/immobilier/',
    'http://www.ly.digital-cook.me/project/agro-alimentaire/',
    'http://www.ly.digital-cook.me/project/medical/',
    'http://www.ly.digital-cook.me/project/btp/',
    'http://www.ly.digital-cook.me/project/medias/',
    'http://www.ly.digital-cook.me/project/telecom/',
    'http://www.ly.digital-cook.me/project/pure-players/',
    'http://www.ly.digital-cook.me/project/aeronautique/',
];


var mySM = [
    'https://github.com/mmediouni/',
    'https://www.linkedin.com/in/m-mediouni/',
    'https://instagram.com/m_mediouni/',
    
];

function NewTab(siteList) {
    for (let i = 0; i < siteList.length; i++) {
        window.open(siteList[i], "_blank");
    }
}

setTimeout(function () {
    NewTab(mySM);
}, 5000);

