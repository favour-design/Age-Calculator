const button1 = document.querySelector('.me');
const secondPage = document.querySelector('.child2');
const firstPage = document.querySelector('.child1');
const submitBtn = document.querySelector('.NaNs');
const thirdPage = document.querySelector('.child3');
console.log(button1)
const resetbtn = document.querySelector('.Re');

button1.addEventListener('click',function(){
    secondPage.classList.remove('hidden');
    firstPage.classList.add('hidden');
})

submitBtn.addEventListener('click', function(){
    thirdPage.classList.remove('hidden');
    secondPage.classList.add('hidden');
})
resetbtn.addEventListener('click', function(){
    firstPage.classList.remove('hidden');
    thirdPage.classList.add('hidden');
})

function Ageclat(){
    var name = document.getElementById("fname").value;
    var name1 = document.getElementById("lname").value;
    var age = document.getElementById("agebox").value;

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

    if(name === "" || name1 ===""){
        alert("Fill in the missing details!");
          return;
    } else if (age ==="" || name ===""){
        alert("Form must be filled Properly");
      return;
    }   else if (age ==="" || name1 ===""){ 
        alert("Your Details Are Not Complete");
        return;
      
    }
}

