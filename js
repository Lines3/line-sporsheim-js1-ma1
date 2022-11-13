// question 1
const cat = {
    complain: "Meow!";

};
console.log(cat.complain)

// question 2 & 3
const heading3 = document.getElementById("heading3");


console.log(heading3.innerHTML)

heading3.innerHTML = "Updated heading";
heading3.style.fontSize = "2em";

// question 5
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs)

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// question 6
const resultsContainer = document.querySelector(.results);

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.color = "yellow";
