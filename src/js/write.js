import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"
import { ref as databaseRef, push, set, get, remove } from "firebase/database"
import { db, storage } from "./libs/firebaseConfig"

const submitProductButton = document.querySelector('#productForm')

submitProductButton.addEventListener('submit', onAddProduct)

function onAddProduct(e) {
    e.preventDefault()
    AddNewProduct()
}

async function AddNewProduct() {
    let imageFile = document.querySelector('#productImage')
    let category = document.querySelector('#productCategory')
    let title = document.querySelector('#productTitle')
    let description = document.querySelector('#productDescription')
    let price = document.querySelector('#productPrice')

    // data
    imageFile = imageFile.files[0]
    category = category.value.trim()
    title = title.value.trim()
    description = description.value.trim()

    console.log(db)
    console.log(imageFile.name)

    //set refs to paths to write to in firebase
    const imageRef = storageRef(storage, `Product Images/${imageFile.name}`)
    const dataRef = databaseRef(db, 'Products')

    //upload imagefile to storage
    const uploadImage = await uploadBytes(imageRef, imageFile)

    //grab url to imagefile
    const imageUrlPath = await getDownloadURL(imageRef)

    //upload path of image to storage bucket on fb
    const storagePath = uploadImage.metadata.fullPath

    //Generate unique firebase key to send data to
    const itemRef = await push(dataRef)

    //Push new item to deliver to fb rtd, we use set because we dont want each rpoduct to have another nested key
    set(itemRef, {
        key: itemRef.key,
        sku: `lkjh${itemRef.key}`,
        imageUrlPath,
        storagePath,
        category,
        title,
        description,
        price
    })
}