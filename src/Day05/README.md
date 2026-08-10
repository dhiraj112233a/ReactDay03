⭐ Array of Objects in React:
- An array of objects means storing multiple objects inside one array.
- For example, if you want to store information about cricket players:
    const players = [
  {
    jerseyNo: 45,
    name: "Rohit Sharma",
    age: 39
  },
  {
    jerseyNo: 18,
    name: "Virat Kohli",
    age: 37
  },
  {
    jerseyNo: 7,
    name: "MS Dhoni",
    age: 45
  }
];


⭐ What is map() in JavaScript/React?
- map() is an array method used to go through each item of an array and create something from it.
- In React, map() is very commonly used to display an array of objects.
- Simple example :
const names = ["Rohit", "Virat", "Dhoni"];
names.map((name) => {
  console.log(name);
});


⭐ Events in React :
- Events are actions performed by the user on a webpage, such as clicking, typing, submitting a form, etc.
- Common React events:
 Events	           Use
onClick	       Button click
onChange	   Input value changes
onSubmit	   Form submission
onMouseOver	   Mouse moves over an element
onKeyDown	   Keyboard key is pressed

1. Onclick Event Eg :
<button onClick={() => alert("Hello!")}>
  Click Me
</button>

2. OnChange Event Eg :
<input onChange={(e) => console.log(e.target.value)} />

3. OnSubmit Event Eg :
<form onSubmit={() => alert("Submitted!")}>
  <button type="submit">Submit</button>
</form>

4. onMouseOver Event Eg :
<h2 onMouseOver={() => alert("Mouse over!")}>Hover Me</h2>

5. onKeyDown Event Eg :
<input onKeyDown={(e) => console.log(e.key)} />