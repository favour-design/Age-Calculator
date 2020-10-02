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