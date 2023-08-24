const numbers = document.querySelectorAll('.number');


numbers.forEach((number) => {
    let initialCount = 0;
    let endCount = parseInt(number.dataset.value);

    let duration = Math.ceil(endCount/1000);

    function updateCounts(){
number.textContent = `${initialCount}+`;

if(initialCount >= endCount){
    clearInterval(countInterval )
}
else{
    initialCount += Math.ceil(endCount/ 1000)
}
    }

    const countInterval = setInterval(updateCounts, duration)

    
})
window.addEventListener('DOMContentLoaded', () =>{
    numbers.forEach((number) => {
        number.textContent = '0';
    });
});