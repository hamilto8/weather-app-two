const CorFspan = document.querySelector('.CorF');
const tempNum = document.querySelector('.tempDegrees');

function convertCtoF(){
    if(CorFspan.innerText === 'F'){
        const celsiusDegrees = ((parseFloat(tempNum.innerText) - 32) * 5/9).toFixed(1);
        tempNum.innerText = celsiusDegrees;
        CorFspan.innerText = 'C';
    } else {
        const fahrenheitDegrees = (parseFloat(tempNum.innerText) * 9/5 + 32).toFixed(1)
        tempNum.innerText = fahrenheitDegrees;
        CorFspan.innerText = 'F';
    }
}

export default convertCtoF