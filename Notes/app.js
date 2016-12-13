/** 
 * two built-in objects that exist on all pages.
 * 
 * window = the tab (parent)
 * document  = the page (child)
 */

// 'event listener' is a function that waits for an event
// to occur before running.

// we provide two things:
// - the event name we want to listen (there are lots)
// - what function we want to run when it happens

function init() {
    // querySelector() is how we find elemnts that already exist
    // one parameter, a CSS selector for the element you're looking for
    let button = document.querySelector('#add');
    // Anon functions: functions w/o names
    button.addEventListener('click', function () {

        // 1. get the text in the textbox
        let textBox = document.querySelector('input');
        // textBox.value = textBox.value + ' SOUNDS LIT'; 
        // ^^^ value is a property that <input> elements have

        // 2. create a new <li>
        let child = document.createElement('li'); //parameter = element type
        child.textContent = textBox.value; //textContent = the words between <li>and</li>

        if (textBox.value[0].toLowerCase() === 'k') {
            child.classList.add('highlight'); //classList is sort of like an array
        }

        textBox.value = '';
        // 3. add the <li> to the <ul>
        let parent = document.querySelector('#list'); // the <ul>
        parent.appendChild(child); // add the child element to the parent

        console.log('clicked');
    });
}

window.addEventListener('load', init);
