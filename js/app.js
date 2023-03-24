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


//This function takes a valid css selector as a string as an argument (sel)
function short_text_alert(sel)
{
    // I store the elements from the page in elements using the argument variable sel(the given selector)
    let elements = document.querySelectorAll(sel);
    for(let i = 0; i < elements.length; i++)
    {
        //Elements is an array of objects which means I can loop over it. For each iteration, we check the object's innerHTML value (a string (which is also an array)) against the conditional below
        if(elements[i].innerHTML.length < 30)
        {
            // If the innerHTML is less than 30 characters, replace the innerHTML by `NOT ENOUGH`
            elements[i].innerHTML = `NOT ENOUGH`;

        }
    }
}

short_text_alert(`.service_description`);

// This function takes an array of valid css selectors as strings as arguments
function insert_happy_tag(selector_array)
{
    //I initialize an empty array here so that I can reassign its value inside the loops below 
    let elements = [];
    for(let i = 0; i < selector_array.length; i++ )
    {  
        //I store the array of objects from the HTML with the selector which has an unknown number of elements
        elements = document.querySelectorAll(selector_array[i]);
        
        for(let i = 0; i < elements.length; i++)
        {
            // I loop over this array and check if each element's innerHTML (which is a string) includes the word `happy`.
            if(elements[i].innerHTML.includes(`happy`) === true)
            {
                //If it does, I insert an h2 tag as the last child of that element
                elements[i].insertAdjacentHTML(`beforeend`, `<h2> HAPPY TAG ABOVE</h2>`)
                //When done looping over this inner array, the code will go back to the outer loop and do the whole process again
            }
        }      
    }
}

let happy = insert_happy_tag([`p`, `h3`]);

