// Creating my variables for all the elements I want to manipulate
let page_title = document.querySelector(`#page_title`);
let founder_names = document.querySelectorAll(`.founder_name`);
let page_footer = document.getElementById(`page_footer`);
let service_description = document.getElementsByClassName(`service_description`);
let user_tags = document.querySelectorAll(`.user_info`);

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

short_text_alert(`p`);

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

//I created an array of objects to be injected into the page
let my_usernames = [
    {
        username: `rambo123`,
        bio: `rambo123 is a golly cool person`,
        profile_img_url: `https://img.freepik.com/free-photo/portrait-young-dark-skinned-african-attractive-man-with-curly-hairstyle-casual-checkered-shirt-pointing-upside-with-happy-relaxed-expression-copy-space_176420-11077.jpg?w=1380&t=st=1679672186~exp=1679672786~hmac=9338373af096fe9d635c11fc7acf1ff0e658f8e8a56973f89c2c9d1f99e3bd22`
    },
    {
        username: `rocky123`,
        bio: `darn rocky loves Adrienne, frick`,
        profile_img_url: `https://img.freepik.com/free-photo/young-beautiful-woman-looking-camera-trendy-girl-casual-summer-white-t-shirt-jeans-shorts-positive-female-shows-facial-emotions-funny-model-isolated-yellow_158538-15796.jpg?w=2000&t=st=1679673977~exp=1679674577~hmac=b6e13f4513f287bd5b67b82f823110dc9ffe9d9c7a85e1d989f795a4e7e66c20`
    }
];

//Creating an array of swears words to redact.
let swears = [`golly`, `frick`, `darn`];

//This loop runs over the elements that have user_info as a class, which in this case is 2 elements.
for(let i = 0; i < user_tags.length; i++)
{
        //insert the username content at the user_tag location. All HTML in this code will be injected on top of each other from the bottom.
        user_tags[i].insertAdjacentHTML(`beforeend`, `<h3>${my_usernames[i][`username`]}</h3>`);    

        //Create a clean bio variable that will be reassigned through each loop of the replaceAll method below. The replaceAll method returns the 'replaced' string, if the pattern(swear) is not in the string, it will return the string without doing anything. (This is why I opted not to add an if statement to check if the bios contained the swears)
        let clean_bio = my_usernames[i][`bio`];
        // I wonder if declaring a variable in a loop like this is good practice. In this case, it works and the variable gets reassigned on each iteration. I usually declare the variable out of the loop, but it was messy in this case.
        for(let y = 0; y < swears.length; y++)
        {
            //Each iteration of the loop replaces the string value that came before, which will remove each swear word form the bios one by one.
            clean_bio = clean_bio.replaceAll(`${swears[y]}`, `***`);
        }

        //Once the bios are clean, we add them to the page using the clean_bio variable that contains bios without swear words
        user_tags[i].insertAdjacentHTML(`beforeend`, `<p>${clean_bio}</p>`);
        
        //Finally add the image with the url from the username array, and also add an alt attribute built with the username.
        user_tags[i].insertAdjacentHTML(`beforeend`, `<img src="${my_usernames[i][`profile_img_url`]}" alt="Image of ${my_usernames[i][`username`]}">`);
}




    
