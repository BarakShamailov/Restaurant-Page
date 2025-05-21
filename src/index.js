import "./style.css";
import { homePage } from "./page-load";
import { contactPage } from "./contact-load";
import { menuPage } from "./menu-load";

homePage();

const footer = document.createElement('div');
footer.className = 'footer';
footer.textContent = '© 2025 The Feeder Restaurant, Made By Barak Shamailov';
document.body.appendChild(footer);


const buttons = document.querySelectorAll('.tab');


buttons.forEach(button => {
    button.addEventListener('click', () => {
       
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

       
        const content = document.getElementById('content');
        content.innerHTML = '';

       
        switch (button.textContent.trim()) {
            case 'Home':
                homePage();
                break;
            case 'Menu':
                menuPage();
                break;
            case 'Contact':
                contactPage(); 
                break;
        }
    });
});