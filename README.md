 Answer to the following questions :
 
***** What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   . getElementById finds one element by its unique ID.
   . getElementsByClassName finds all elements with a certain class.
   . querySelector finds the very first element that matches a CSS selector.
   . querySelectorAll finds all elements that match a CSS selector.

***** How do you create and insert a new element into the DOM?
    .  let div = document.createElement('div')
       div.innerHTML = <h1>Hello</h1>
       document.body.appendChild(div);

*****  What is Event Bubbling and how does it work?  
     . when a event happened the parent event also engaged after child event  and this chain is running at the top parent .

***** What is Event Delegation in JavaScript? Why is it useful?
    . Event delegation means putting one event listener on a parent element. This listener can then handle events from all its child elements. It's useful because it saves memory and works for new elements that are added later.

***** What is the difference between preventDefault() and stopPropagation() methods :
    . preventDefault() stops the browser's default action for an event. It doesn't stop the event from continuing to bubble.

    . stopPropagation() stops the event from bubbling up to parent elements. It doesn't stop the browser's default action.
