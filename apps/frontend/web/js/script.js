import { runApp, reload } from "./bmi.js";
 // Shows declaimer as model when page loads 

window.addEventListener('load', () => {
    // check if user has already seen the disclaimer
    if(!localStorage.getItem('zemi-disclaimer')){
        // show disclaimer
        document.querySelector('.disclaimer-modal').classList.add('open');
    };
    });

    // when user click "I understand" button 
    closeDisclaimer = () => {

        localStorage.setItem('zemi-disclaimer', 'true');
         // close disclaimer
        document.querySelector('.disclaimer-modal').classList.remove('open');
    }



   