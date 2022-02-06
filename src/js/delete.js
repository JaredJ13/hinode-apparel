import { ref as databaseRef, remove } from 'firebase/database'
import { getStorage, ref as storageRef, deleteObject } from 'firebase/storage'
import { db, storage } from './libs/firebaseConfig'

function DeleteProduct(productKey, imageFileName) {
    const dataRef = databaseRef(db, `Products/${productKey}`)
    const imageRef = storageRef(storage, `Product Images/${imageFileName}`)

    deleteObject(imageRef)
    remove(dataRef)
}

export { DeleteProduct }