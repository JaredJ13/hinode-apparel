import { ref as dataRef, get, set, update } from 'firebase/database';
import { db } from './libs/firebaseConfig';
import { productCard } from './templates/productCard'

async function pageInit() {
    const productRef = dataRef(db, 'Products/')
    const productSnapShot = await get(productRef)
    const data = productSnapShot.val()

    Object.values(data).map(product => {
        const card = productCard(product)
        // productCard(product) returns the element created from template
        document.querySelector('.product-cards').append(card)
    })
}

pageInit()