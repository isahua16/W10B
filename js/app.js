// Creating my variables for all the elements I want to manipulate
let page_title = document.querySelector(`#page_title`);
let founder_names = document.querySelectorAll(`.founder_name`);
let page_footer = document.getElementById(`page_footer`);
let service_description = document.getElementsByClassName(`service_description`);

//Change the background color of the footer
page_footer.style.backgroundColor = `turquoise`;

//For each element in the founder_names array, change the innerHTML based on the content already on the page
for(let i = 0; i < founder_names.length; i++)
{
    if (founder_names[i].innerHTML === `John Smith`)
    {
        founder_names[i].innerHTML = `Kurt Cobain`;
    }
    else if (founder_names[i].innerHTML === `Jane Doe`)
    {
        founder_names[i].innerHTML = `Taylor Swift`;
    }
}

// Adding a title to each service card
service_description[0].insertAdjacentHTML(`beforebegin`, `<h3>Custom Web Development</h3>`);
service_description[1].insertAdjacentHTML(`beforebegin`, `<h3>Web Maintenance and Support</h3>`);
service_description[2].insertAdjacentHTML(`beforebegin`, `<h3>E-Commerce Development</h3>`);

//Insert an H1 tag inside the empty page_title div in the header
page_title.insertAdjacentHTML(`afterbegin`, `<h1>W10B</>`)


