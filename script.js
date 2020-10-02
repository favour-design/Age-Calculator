const button1 = document.getElementById('me');
const secondPage = document.getElementById('child2');
const firstPage = document.getElementById('child1')
const submitBtn = document.getElementById('[type="submit"]');
const thirdPage = document.getElementById('child3');

button1.addEventListener('click', function(){
    secondPage.classList.remove('hidden');
    firstPage.classList.add('hidden');
})

submitBtn.addEventListener('click', function(){
    thirdPage.classList.add('hidden');
    secondPage.classList.remove('hidden');
})