
import {SiOpenaigym} from "react-icons/si"


export const links = [
    {   
        name: "Home",
        path: '/'
    },
    {
        name: "Membership",
        path: '/Membership'
    },
    {
        name: "Products",
        path: '/products',
        submenu: [
            {
                name: "Drip Show Delivery",
                path: 'delivery'
            },
            {
                name: "Drip Show Store Locator",
                path: 'storelocator'
            },
        ],
    },
    {
        name: "Company",
        path: '/company',
        submenu: [
            {
                name: "About Us",
                path: 'Aboutus'
            },
            {
                name: "Careers",
                path: 'Careers'
            },
        ],
    },
    {
        name: "Contact Us",
        path: '/Contact'
    },
    {
        name: "Sign in",
        path: '/signin'
    },
    {
        name: "Sign up",
        path: '/signup'
    }
]




export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program1",
        info: "Program",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/444"
    }
]
