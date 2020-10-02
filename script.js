let button1 = document.querySelector('.me');
let secondPage = document.querySelector('.child2');
let firstPage = document.querySelector('.child1');
let submitBtn = document.querySelector('.NaNs');
let thirdPage = document.querySelector('.child3');
console.log(button1)
let resetbtn = document.querySelector('.Re');

button1.addEventListener('click',function(){
    secondPage.classList.remove('hidden');
    firstPage.classList.add('hidden');
})

// submitBtn.addEventListener('click', function(){
// })
resetbtn.addEventListener('click', function(){
    firstPage.classList.remove('hidden');
    thirdPage.classList.add('hidden');
})

function Ageclat(){
    thirdPage.classList.remove('hidden');
    secondPage.classList.add('hidden');
    var name, name1, age;
    name = document.getElementById("fname").value;
    name1 = document.getElementById("lname").value;
    age = document.getElementById("agebox").value;

    if(name === "" || name1 ==="" || age ==="" ){
        alert("Fill in the missing details!");
        return;
    }   else {
            let nam = document.getElementById("span1");
            nam.textContent = name;
            let nam4 = document.getElementById("span4");
            nam4.textContent = name1;
            let nam1 = document.getElementById("span2");
            nam1.textContent = age;
            let nam2;
            nam2 = age * 365 
            nam3 = document.getElementById("span3");
            nam3.textContent = nam2;
    }
    

}

