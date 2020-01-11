const name ="Nikhil";
const age =25;
const city = "Yamunanagar";
let html;

html = `
    <ul>
        <li> Name: ${name}</li>
        <li> Age: ${age}</li>
        <li> City: ${city}</li>
    </ul>
`;

document.body.innerHTML = html;