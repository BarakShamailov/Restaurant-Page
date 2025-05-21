export function contactPage() {
    const content = document.getElementById("content");


    const header = document.createElement('h1');
    const text = document.createElement('p');
    const mainContanier = document.createElement('div');
    mainContanier.classList.add("main-content");


    header.textContent = 'Feel Free To Contact Us :)';


    mainContanier.appendChild(header);
    

    const container1 = document.createElement('div');
    const container2 = document.createElement('div');
    const container3 = document.createElement('div');
    const headerContainer1 = document.createElement('h1');
    container1.appendChild(headerContainer1);
    headerContainer1.textContent = 'Restaurant';
    const contentContainer1 = document.createElement('p')
    contentContainer1.innerHTML = '(0)4-999-7852';
    
    container1.classList.add("container1");
    container2.classList.add("container2");
    container3.classList.add("container3");
   
    const headerContainer2 = document.createElement('h1');
    const headerContainer3 = document.createElement('h1');
    headerContainer2.textContent = "Manager:"
    headerContainer3.textContent = "Supervisour:"
    mainContanier.appendChild(container1);
    mainContanier.appendChild(container2);
    mainContanier.appendChild(container3);
    container2.appendChild(headerContainer2);
    container3.appendChild(headerContainer3);
    const contentContainer2 = document.createElement('p');
    const contentContainer3 = document.createElement('p');
    contentContainer2.innerHTML = `Michael Bistro: (0)92-555-7845`;
    contentContainer3.innerHTML = 'Toni Mantoni: (0)92-555-7894';

    contentContainer2.classList.add("content-container2");
    container1.appendChild(contentContainer1);
    container2.appendChild(contentContainer2);
    container3.appendChild(contentContainer3);





    content.appendChild(mainContanier);

}