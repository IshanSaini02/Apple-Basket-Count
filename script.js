// select HTML Element 
let leftNumber = document.querySelector('.left-count')
let rightNumber = document.querySelector('.right-count')
let leftBtn = document.querySelector('.left-btn')
let rightBtn = document.querySelector('.right-btn')

// Left Button logic
leftBtn.addEventListener('click', () => {
    if(parseInt(rightNumber.innerText) > 0){
        rightNumber.innerText == --rightNumber.innerText 
        leftNumber.innerText = ++leftNumber.innerText
    }
})
// right Button logic
rightBtn.addEventListener('click', () => {
    if(parseInt(leftNumber.innerText) > 0){
        leftNumber.innerText = --leftNumber.innerText
        rightNumber.innerText == rightNumber.innerText++
    }
})