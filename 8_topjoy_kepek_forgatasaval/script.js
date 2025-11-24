const kupak = document.querySelector('#kupak')
const szoveg = document.querySelector('#szoveg')
const tarolo = document.querySelector('.tarolo')

console.log(kupak,szoveg,tarolo)

const uzik = [];
let isClosed = true;

window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch('./uzik.csv')
    //console.log(response)
    const text = await response.text();
    //console.log()
    const sorok = text.split('\n').map(sor => sor.trim())
    } catch(error) {

    }

    
    
})
