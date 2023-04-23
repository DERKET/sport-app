let progress = document.getElementById('progress') 
let prev = document.getElementById('prev') as HTMLInputElement | null
let next = document.getElementById('next') as HTMLInputElement | null
let circle = document.querySelectorAll('.circle') 
let Password = document.getElementById('Password') as HTMLInputElement
let Email = document.getElementById('message') as HTMLInputElement | null
let currentActive = 1

next?.addEventListener('click',() =>{
    console.log(Email?.value)

    if (Email.value == "")
    {

    }
    else {
        currentActive++
        if(currentActive > circle.length)
        {
            currentActive = circle.length
            Password.disabled = false;
        }
        update()
        console.log(currentActive)
    
    }
})

prev?.addEventListener('click', () =>{
    currentActive--

    if(currentActive < 1)
    {
        currentActive = 1
    }
    console.log(currentActive)
    update()
})

function update(){
    circle.forEach((circle, idx) =>{
        if(idx < currentActive) {
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%'

    if (currentActive === 1){
        if (prev != null){
            prev.disabled = true
        }
    } else if (currentActive === circle.length){
        if (next != null){
            next.disabled = true
        }
    } else {
        if (prev != null || next != null){
            prev!.disabled = false
            next!.disabled = false
        }
    }
}