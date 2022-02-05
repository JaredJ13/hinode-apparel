import { ref as databaseRef, remove } from 'firebase/database';
import { db } from './libs/firebaseConfig';

function DeleteProduct(productKey) {
    const dataRef = databaseRef(db, `Products/${productKey}`)

    remove(dataRef)
}

export { DeleteProduct }