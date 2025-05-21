export function homePage() {
    const content = document.getElementById("content");


    const header = document.createElement('h1');
    const text = document.createElement('p');
    const mainContanier = document.createElement('div');
    mainContanier.classList.add("main-content");


    header.textContent = 'Welcome to The Feeder Restaurant!';


    mainContanier.appendChild(header);
    

    const container1 = document.createElement('div');
    const container2 = document.createElement('div');
    const container3 = document.createElement('div');
    container1.classList.add("container1");
    container2.classList.add("container2");
    container3.classList.add("container3");
    container1.textContent = 'At our restaurant, we serve food made with love and the freshest ingredients. Whether you\'re here for a quick lunch or a cozy dinner, you\'ll feel right at home.';
    const headerContainer2 = document.createElement('h1');
    const headerContainer3 = document.createElement('h1');
    headerContainer2.textContent = "Hours:"
    headerContainer3.textContent = "Location:"
    mainContanier.appendChild(container1);
    mainContanier.appendChild(container2);
    mainContanier.appendChild(container3);
    container2.appendChild(headerContainer2);
    container3.appendChild(headerContainer3);
    const contentContainer2 = document.createElement('p');
    const contentContainer3 = document.createElement('p');
    contentContainer2.innerHTML = `
    Sunday: 8am - 8pm<br>
    Monday: 6am - 6pm<br>
    Tuesday: 6am - 6pm<br>
    Wednesday: 6am - 6pm<br>
    Thursday: 6am - 10pm<br>
    Friday: 6am - 10pm<br>
    Saturday: 8am - 10pm
  `;
    contentContainer3.innerHTML = 'The Booksmith<br>1644 Haight St<br>San Francisco,<br>CA 94117<br>United States';

    contentContainer2.classList.add("content-container2")
    container2.appendChild(contentContainer2);
    container3.appendChild(contentContainer3);





    content.appendChild(mainContanier);

}