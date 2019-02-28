function main() {
    // First, grab all the DOM elements
    let growMeParagraph = document.getElementById('grow-me');
    let shrinkMeParagraph = document.getElementById('shrink-me');
    let allTheListItems = document.querySelectorAll('li'); // or getElementsByTagName
    let exampleLink = document.querySelector('.link');
    let hideMeParagraph = document.getElementById('hide-me');
    let showMeParagraph = document.getElementById('show-me');
    let nameInput = document.getElementById('name');
    let nameH1 = document.querySelectorAll('h1'); // or getElementsByTagName

    // Uncomment for testing
    // Wrapping variable names in brackets will log those names out with the data
    console.log({growMeParagraph, shrinkMeParagraph, allTheListItems, exampleLink, nameInput, nameH1});

    // Add the "big" class to the "grow-me" paragraph.
    growMeParagraph.classList.add('big');

    // Remove the "big" class to the "shrink-me" paragraph.
    shrinkMeParagraph.classList.remove('big');

    // Find all the <li>s and log their text content to the console.
    for (let listItem of allTheListItems) {
        console.log(listItem.innerText);
    }

    //  Set the href of the link to "https://www.example.com" and update the text to say
    // "somewhere" instead of "nowhere".
    exampleLink.setAttribute('href', 'https://www.example.com');
    exampleLink.innerText = "somewhere";

    // Set the "display" CSS property of the "hide-me" paragraph to "none".
    hideMeParagraph.style.display = "none";

    // Set the "display" CSS property of the "show-me" paragraph to "block".
    showMeParagraph.style.display = "block";

    // Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Hello Grant!".
    
    // NOTE
    // We know querySelectorAll gives us a list
    // A list is just an array

    // Knowing this
    //   We can just grab the first index (aka, 0) from the list to get our h1
    nameH1[0].innerText = `Welcome ${nameInput.value}!`;
}