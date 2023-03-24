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
        founder_names[i].innerHTML = `happy Feet`;
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


//This function takes a valid css selector as a string, and will check if the elements are long enough. If they are less than 30 characters, the function will replace the content with `NOT ENOUGH`
function short_text_alert(sel)
{
    let elements = document.querySelectorAll(sel);
    for(let i = 0; i < elements.length; i++)
    {
        if(elements[i].innerHTML.length < 30)
        {
            elements[i].innerHTML = `NOT ENOUGH`;
        }
    }
}

short_text_alert(`.service_description`);

// This function takes an array of valid css selectors as strings as arguments
function insert_happy_tag(selector_array)
{
    let elements = [];
    for(let i = 0; i < selector_array.length; i++ )
    {  
        elements = document.querySelectorAll(selector_array[i]);
        
        for(let i = 0; i < elements.length; i++)
        {
            if(elements[i].innerHTML.includes(`happy`) === true)
            {
                elements[i].insertAdjacentHTML(`beforeend`, `<h2> HAPPY TAG ABOVE</h2>`)
            }
        }
       
    }
}

let happy = insert_happy_tag([`p`, `h3`]);

