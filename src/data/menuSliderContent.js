// //375
// import pizzaOne375 from '../assets/images/menu-slider/pizza-one-375.webp'
// import pizzaTwo375 from '../assets/images/menu-slider/pizza-two-375.webp'
// import pizzaThree375 from '../assets/images/menu-slider/pizza-three-375.webp'
// import SalmonPoke375 from '../assets/images/menu-slider/sushi-one-375.webp'
// import VeggiePoke375 from '../assets/images/menu-slider/sushi-two-375.webp'
// import MiniSalmon375 from '../assets/images/menu-slider/sushi-three-375.webp'
// import ChickenAlfredo375 from '../assets/images/menu-slider/pasta-one-375.webp'
// import AllaGricia375 from '../assets/images/menu-slider/pasta-two-375.webp'
// import SheetPan375 from '../assets/images/menu-slider/pasta-three-375.webp'
// //700
// import pizzaOne700 from '../assets/images/menu-slider/pizza-one-700.webp'
// import pizzaTwo700 from '../assets/images/menu-slider/pizza-two-700.webp'
// import pizzaThree700 from '../assets/images/menu-slider/pizza-three-700.webp'
// import SalmonPoke700 from '../assets/images/menu-slider/sushi-one-700.webp'
// import VeggiePoke700 from '../assets/images/menu-slider/sushi-two-700.webp'
// import MiniSalmon700 from '../assets/images/menu-slider/sushi-three-700.webp'
// import ChickenAlfredo700 from '../assets/images/menu-slider/pasta-one-700.webp'
// import AllaGricia700 from '../assets/images/menu-slider/pasta-two-700.webp'
// import SheetPan700 from '../assets/images/menu-slider/pasta-three-700.webp'

//375
import pizzaOne375 from '../assets/images/menu-slider/pizza-one-375.jpg'
import pizzaTwo375 from '../assets/images/menu-slider/pizza-two-375.jpg'
import pizzaThree375 from '../assets/images/menu-slider/pizza-three-375.webp'
import SalmonPoke375 from '../assets/images/menu-slider/sushi-one-375.png'
import VeggiePoke375 from '../assets/images/menu-slider/sushi-two-375.png'
import MiniSalmon375 from '../assets/images/menu-slider/sushi-three-375.webp'
import ChickenAlfredo375 from '../assets/images/menu-slider/pasta-one-375.jpg'
import AllaGricia375 from '../assets/images/menu-slider/pasta-two-375.jpg'
import SheetPan375 from '../assets/images/menu-slider/pasta-three-375.jpg'
//700
import pizzaOne700 from '../assets/images/menu-slider/pizza-one-700.webp'
import pizzaTwo700 from '../assets/images/menu-slider/pizza-two-700.webp'
import pizzaThree700 from '../assets/images/menu-slider/pizza-three-700.webp'
import SalmonPoke700 from '../assets/images/menu-slider/sushi-one-700.webp'
import VeggiePoke700 from '../assets/images/menu-slider/sushi-two-700.webp'
import MiniSalmon700 from '../assets/images/menu-slider/sushi-three-700.webp'
import ChickenAlfredo700 from '../assets/images/menu-slider/pasta-one-700.webp'
import AllaGricia700 from '../assets/images/menu-slider/pasta-two-700.webp'
import SheetPan700 from '../assets/images/menu-slider/pasta-three-700.webp'

const menuSliderCategories = [
    {
        name: 'pizza',
        id: 'pizza',
    },
    {
        name: 'pasta',
        id: 'pasta',
    },
    {
        name: 'drinks',
        id: 'drinks',
    },
]
const menuSliderProducts = [
    {
        id: 'Cheese N Corn',
        name: 'Cheese N Corn',
        describtion:
            'Cheese I Golden Corn | Cheese n Corn Pizza',
        price: (360),
        // .toFixed(2)
        img375: pizzaOne375,
        img700: pizzaOne375,
        category: 'pizza',
    },
    {
        id: 'Veggie Paradise',
        name: 'Veggie Paradise',
        describtion:
            'Goldern Corn, Black Olives, Capsicum & Red Paprika',
        price: (290),
        img375: pizzaTwo375,
        img700: pizzaTwo375,
        category: 'pizza',
    },
    {
        id: 'Cheese Burst',
        name: 'Cheese Burst',
        describtion: 'Crust with oodles of yummy liquid Dairy cheese sauce filled inside',
        price: (450),
        img375: pizzaThree375,
        img700: pizzaThree375,
        category: 'pizza',
    },
    {
        id: 'Pepsi',
        img375: SalmonPoke375,
        img700: SalmonPoke375,
        name: 'Pepsi',
        describtion:
            '475ML',
        price: (50).toFixed(2),
        category: 'drinks',
    },
    {
        id: '7UP',
        img375: VeggiePoke375,
        img700: VeggiePoke375,
        name: '7UP',
        describtion: '475ML',
        price: (50).toFixed(2),
        category: 'drinks',
    },
    // {
    //     id: 'mini-salmon-set-22-pcs',
    //     img375: MiniSalmon375,
    //     img700: MiniSalmon700,
    //     name: 'Mini Salmon Set',
    //     describtion:
    //         'Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs',
    //     price: (35).toFixed(2),
    //     category: 'drinks',
    // },
    {
        id: 'Moroccan Spice Pasta Veg',
        img375: ChickenAlfredo375,
        img700: ChickenAlfredo375,
        name: 'Moroccan Spice Pasta Veg',
        describtion: 'Instant Fusilli Pasta, Harissa Sauce, Onion, Mushroom, Olives, Parsley sprinkle',
        price: (145),
        category: 'pasta',
    },
    {
        id: 'Tikka Masala Pasta Veg',
        img375: AllaGricia375,
        img700: AllaGricia375,
        name: 'Tikka Masala Pasta Veg',
        describtion: 'Instant Fusilli Pasta, Spicy Red dressing, Onion, Paneer Tikka, Parsley sprinkle',
        price: (129).toFixed(2),
        category: 'pasta',
    },
    {
        id: 'Creamy Tomato Pasta Veg',
        img375: SheetPan375,
        img700: SheetPan375,
        name: 'Creamy Tomato Pasta Veg',
        describtion:
            'Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olive, Green Capsicum, Parsley sprinkle',
        price: (150).toFixed(2),
        category: 'pasta',
    },
]

export { menuSliderProducts, menuSliderCategories };