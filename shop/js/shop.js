const categoryButtons = document.getElementsByClassName('category-button');
[...categoryButtons].forEach(button => {
    button.addEventListener('click', () => loadProductsList(button.id))
})

const productsListContainer = document.getElementsByClassName('products-list')[0]

function loadProductsList(category) {
    [...document.getElementsByClassName('category-button')].forEach((button) => {
        button.style.borderColor = 'rgba(196, 196, 196, 0.71)'
    })
    document.getElementById(category).style.borderColor = 'green'
    productsListContainer.innerHTML = '';
    const productsList = document.getElementsByClassName('products-list-title')[0]
    productsList.style.visibility = 'visible'
    data[category].forEach((product) => {

        const productContainer = document.createElement('div')
        productContainer.className = 'product'
        productContainer.id = product.id

        const productImage = document.createElement('img')
        productImage.className = 'list-img'
        productImage.src = product.image

        const listInfo = document.createElement('div')
        listInfo.className = 'list-info'

        const productName = document.createElement('h3')
        productName.textContent = product.name

        const productPrice = document.createElement('span')
        productPrice.className = 'list-button'
        productPrice.textContent = product.price

        listInfo.appendChild(productName)
        listInfo.appendChild(productPrice)

        productContainer.appendChild(productImage)
        productContainer.appendChild(listInfo)
        productsListContainer.appendChild(productContainer)
        document.getElementById(product.id).addEventListener('click', () => loadProductInfo(category,
            product.id))
    } )
}

    const aboutContainer = document.getElementsByClassName('product-info-container')[0]
function loadProductInfo(category, id) {
    aboutContainer.innerHTML = ''
    const productInfoHeading = document.getElementsByClassName('product-info-title')[0]
    productInfoHeading.style.visibility = 'visible'
    const product = data[category].find( ({ id: productId }) => id === productId)

    const aboutImgContainer = document.createElement('div')
    aboutImgContainer.className = 'about-img-container'

    const aboutImage = document.createElement('img')
    aboutImage.className = 'about-image'
    aboutImage.src = product.image

    const aboutTextContainer = document.createElement('div')
    aboutTextContainer.id = 'about-text-container'
    const productName = document.createElement('h1')
    productName.textContent = product.name
    const productDescription = document.createElement('p')
    productDescription.className = 'about-description'
    productDescription.textContent = product.description

    const aboutPrice = document.createElement('span')
    aboutPrice.className = 'about-price'
    aboutPrice.textContent = product.price

    const buyButton = document.createElement('span')
    buyButton.className = 'about-buy-button'
    buyButton.id = product.id
    buyButton.textContent = 'BUY'

    aboutImgContainer.appendChild(aboutImage)
    aboutContainer.appendChild(aboutImgContainer)

    aboutTextContainer.appendChild(productName)
    aboutTextContainer.appendChild(productDescription)
    aboutTextContainer.appendChild(aboutPrice)
    aboutTextContainer.appendChild(buyButton)
    aboutContainer.appendChild(aboutTextContainer)

    buyButton.addEventListener('click', () => productPurchase(category, id))

}

function productPurchase(category, id) {
    const aboutTextContainer = document.getElementById('about-text-container')
    aboutTextContainer.innerHTML = ''
    const heading = document.createElement('h1')
    heading.textContent = 'Successfully purchased'
    heading.style.color = 'white'
    heading.style.background = 'green'
    heading.style.width = 'fit-content'
    heading.style.borderRadius = '5px'
    heading.style.padding = '5px'
    const returnText = document.createElement('h3')
    returnText.textContent = 'Return to categories in 3 seconds...'
    returnText.style.color = 'rgb(200, 200, 200)'
    aboutTextContainer.appendChild(heading)
    aboutTextContainer.appendChild(returnText)

    setTimeout(() => {
        const productInfoContainer = document.getElementsByClassName('product-info-container')[0]
        const productInfoHeading = document.getElementsByClassName('product-info-title')[0]
        productInfoHeading.style.visibility = 'hidden'
        const productsList = document.getElementsByClassName('products-list')[0]
        const productsListHeading = document.getElementsByClassName('products-list-title')[0]
        productsListHeading.style.visibility = 'hidden'

        productInfoContainer.innerHTML = ''
        productsList.innerHTML = '';

        [...document.getElementsByClassName('category-button')].forEach((button) => {
            button.style.borderColor = 'rgba(196, 196, 196, 0.71)'
        })
    }, 3000)
}

const data = {
    shoes: [
        {
            name: 'Nike Air Huarache',
            id: 1,
            image: 'images/shoes/sneakers-1.jpg',
            price: '4 999 ₴',
            description: 'The Nike Air Huarache is back as a street style favourite.\n' +
                'Soft leather accents on the upper are paired with super-breathable, perfectly lustrous neoprene ' +
                'fabric. The low collar and boot-like design add a touch of elegance.'
        },
        {
            name: 'Nike Zoom Fly 5',
            id: 2,
            image: 'images/shoes/sneakers-2.jpg',
            price: '5 179 ₴',
            description: 'The Nike Zoom Fly 5 offers comfort and durability, but with a sense of movement that will ' +
                'keep you feeling fast and fresh. This kind of versatility is rare in the running arena. ' +
                'But who said you can\'t have it all?'
        },
        {
            name: 'Nike Air Max Alpha Trainer 5',
            id: 3,
            image: 'images/shoes/sneakers-3.jpg',
            price: '4 259 ₴',
            description: 'The Nike Air Max Alpha Trainer 5 Shoe features Max Air cushioning for comfortable stability ' +
                'for your climb, whether it\'s an easy day or a hard day.\n' +
                '\n' + 'The wide, flat base provides increased stability and traction for all types of hard ' +
                'training without sacrificing style as you move from station to station and get ready to set.'
        }
    ],
    sweatshirts: [
        {
            name: 'Nike Nsw Flc Hoodie',
            id: 1,
            image: 'images/sweatshirts/1.jpg',
            price: '3 320 ₴',
            description: 'Smooth on the outside and soft and cozy on the inside, brushed fleece is the perfect ' +
                'material for sweatshirts in colder temperatures.\n' +
                'Ribbed cuffs and hem help keep the sweatshirt in place as you move.\n' +
                'Drawstring on the hood.\n' +
                'Front pocket for hands and small items. '
        },
        {
            name: 'Nike M Nsw Club Crw',
            id: 2,
            image: 'images/sweatshirts/2.jpg',
            price: '1 499 ₴',
            description: 'Men\'s sweatshirt from Nike is made of organic cotton and polyester. Pairs well with sweatpants or jeans.' +
                ' The model provides comfort and warmth for every day in any weather.'
        }

    ],
    outerwear: [
        {
            name: 'Nike Sportswear Storm-FIT Windrunner',
            id: 1,
            image: 'images/outwear/1.jpg',
            price: '5 760 ₴',
            description: 'We brought the Storm-FIT tech and PRIMALOFT® Thermoplume insulation to our Windrunner puffer, ' +
                'elevating its warmth, protection and cold-weather comfort. ' +
                'The matte shell fabric works to shed rain, while the insulation helps to lock in your natural warmth. ' +
                'Stay warm, stay dry and look your best in the elements.'
        },
        {
            name: 'Nike Storm-FIT Windrunner',
            id: 2,
            image: 'images/outwear/2.jpg',
            price: '4 270 ₴',
            description: 'We don’t believe water-resistant jackets have to be boring. In fact, we don’t ' +
                'see why they can’t be bold and bright. Offering plush warmth in a lightweight package, this hooded ' +
                'layer features Nike Storm-FIT technology to help you stay comfortable in harsh weather.' +
                ' Chevron design lines inspired by the original Windrunner pair with quirky graphics to add an air ' +
                'of happiness.'
        },
        {
            name: 'Nike Sportswear Style Essentials',
            id: 3,
            image: 'images/outwear/3.jpg',
            price: '3 528 ₴',
            description: 'Slightly cropped, the Nike Sportswear Style Essentials M65 Jacket is a sophisticated ' +
                'take on the timeless military design. Ready for cool-weather layering, its smooth nylon ' +
                'fabric features a mesh lining for a comfortable, easy-to-layer feel. Bonded pill tape ' +
                'reinforces critical seams for a long-lasting construction.'
        }
    ],
    tracksuits: [
        {
            name: 'Nike Sportswear Solo Swoosh',
            id: 1,
            image: 'images/tracksuits/1.jpg',
            price: '4 032 ₴',
            description: 'This track-inspired jacket is built on clean lines with crisp, crinkle-woven ' +
                'fabric in a roomy fit you can dress up or down. The full-zip design lets you change up' +
                ' your style and coverage while soft elastic in the hem and cuffs help you comfortably move ' +
                'through your day.'
        },
        {
            name: 'Nike Sportswear Authentics',
            id: 2,
            image: 'images/tracksuits/2.jpg',
            price: '3 510 ₴',
            description: 'The clean, classic lines of the vintage track jacket are timeless on the track ' +
                'and streets, alike. This version takes that look and perfects it. Heavyweight knit fabric ' +
                'feels silky smooth on your skin. A stand collar, exposed metal zippers and piping detail on ' +
                'the shoulder seams nod to the iconic original.'
        },
    ],
    pants: [
        {
            name: 'Nike Sportswear Tech Fleece',
            id: 1,
            image: 'images/pants/1.jpg',
            price: '3 960 ₴',
            description: 'Ready for cooler weather, the Nike Sportswear Tech Fleece Joggers feature an updated' +
                ' fit perfect for everyday wear. Roomy through the thigh, this tapered design narrows at the ' +
                'knee to give you a comfortable feel without losing the clean, tailored look you love. Tall ' +
                'ribbed cuffs complete the jogger look while a zippered pocket on the right leg provides secure ' +
                'small-item storage and elevate the look.\n'
        },
        {
            name: 'Nike Club Fleece',
            id: 2,
            image: 'images/pants/2.jpg',
            price: '2 340 ₴',
            description: 'Made with soft, brushed fleece for lightweight warmth and comfort, these Nike Club ' +
                'Fleece pants give you casual style for everyday wear. They\'re slightly cropped to give you ' +
                'more room for your shoes to shine.'
        },
        {
            name: 'Nike Therma-FIT Standard Issue',
            id: 3,
            image: 'images/pants/3.jpg',
            price: '2 736 ₴',
            description: 'Venturing out into the cold or rain? Suit up in our winterized Standard Issue ' +
                'Pants and enjoy a performance feel with the comfort of an old favorite. Stretchy, warm ' +
                'fabric with a water-repellent exterior helps to keep you warm and dry.'
        },
        {
            name: 'Nike Repel',
            id: 4,
            image: 'images/pants/4.jpg',
            price: '2 518 ₴',
            description: 'The Nike Repel Utility Pants combine slightly stretchy, water-repellent fabric ' +
                'with the versatile utility of multiple pockets. The fit tapers slightly from knee to ankle' +
                ' for a tailored look you can wear anywhere.'
        },
    ]

}
