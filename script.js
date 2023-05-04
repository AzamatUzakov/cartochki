let arr = [
    {
        id: 1,
        tarif: "Гость",
        description: "Приходите в любое время",
        price: 1000,
        details: {
            "Место в общей зоне": true,
            "Доступ 24/7": true,
            "Skype-room": false,
            "Переговорная": false,
            "Мероприятия": false,
        }
    },
    {
        id: 2,
        tarif: "Резидент",
        description: "Сатнь частью сообщества",
        price: 14900,
        details: {
            "Место в общей зоне": true,
            "Доступ 24/7": true,
            "Skype-room": true,
            "Переговорная": false,
            "Мероприятия": false,
        }
    },
    {
        id: 1,
        tarif: "Резидент плюс",
        description: "Любим вас",
        price: 19900,
        details: {
            "Место в общей зоне": true,
            "Доступ 24/7": true,
            "Skype-room": true,
            "Переговорная": true,
            "Мероприятия": true,
        }
    },
]


/* for(let key in obj) { 
    obj[key] 
} */

let body = document.querySelector('body')
let contener = document.createElement('div')


for (let i = 0; i < 3; i++) {
    let header = document.createElement('div')
    let h1 = document.createElement('h1')
    let umka_p = document.createElement('p')
    let h2 = document.createElement('h2')
    let hr = document.createElement('hr')

    let button = document.createElement('button')

    contener.classList.add('contener')
    header.classList.add('header')
    h1.classList.add('h1')
    umka_p.classList.add('umka')
    h2.classList.add('h2')
    hr.classList.add('hr')
    let block = document.createElement('div')
    let box = document.createElement('div')
    button.classList.add('button')


    h1.innerHTML = 'Гость'
    umka_p.innerHTML = 'приходи в любое время'
    h2.innerHTML = '$1000'
    button.innerHTML = 'Выбрать тариф'


    body.append(contener)
    contener.append(header)
    header.append(h1, umka_p, h2, hr, block, button)


    h1.innerHTML = arr[i].tarif
    umka_p.innerHTML = arr[i].description
    h2.innerHTML=arr[i].price+'$'


    for (let w in arr[i].details) {
        let block_p = document.createElement('p')
        let block_img = document.createElement('img')
        block.append(box)
        box.append(block_p)

        block_img.src = "img/depositphotos_175629814-stock-photo-green-tick-symbol.jpg"
        block_p.innerHTML = w

        block.classList.add('block')
        box.classList.add('box')

        block_img.classList.add('img')
        if (arr[i].details[w]) {
            block.append(box)
            box.append(block_img)

        }
    }
}
