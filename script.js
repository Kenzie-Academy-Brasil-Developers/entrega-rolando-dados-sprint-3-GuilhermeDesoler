const newOl = document.createElement('ol')
newOl.setAttribute('start', 2)
document.body.appendChild(newOl)

function showResults(data, exercise) {
    const newLi = document.createElement('li')
    const newP = document.createElement('p')
    newP.innerText = data
    newLi.appendChild(newP)
    newOl.appendChild(newLi)
}

let count = new Array(11).fill(0)


function randomGenerate() {
    return Math.floor(Math.random() * 6) + 1;
}

function dicesRoll() {
    let result
    let resultFirstDice
    let resultSecondDice
    for(let i = 1; i <= 1000; i++) {
        resultFirstDice = randomGenerate()
        resultSecondDice = randomGenerate()
        result = resultFirstDice + resultSecondDice
        count[result-2]++
    }

    for(let j = 0; j < count.length; j++) {
        showResults(count[j])
    }

    return count
}
dicesRoll()

function barSection() {
    const barSection = document.createElement('section')
    barSection.classList.add('barras')
    document.body.appendChild(barSection)
    for(let i = 0; i < count.length; i++) {
        let barDiv = document.createElement('div')
        let larguraDaBarra = count[i]
        barDiv.style.width = `${larguraDaBarra}px`
        barDiv.style.height = '20px'
        barDiv.style.marginBottom = '10px'
        barDiv.style.backgroundColor = 'blue' 
        barSection.appendChild(barDiv)
    }
}
barSection()

