import { ref as databaseRef, get, set, update, push } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from './libs/firebaseConfig';

let imageFile = document.querySelector('#productImage-edit')
let image = document.querySelector('#display-edit img')
let category = document.querySelector('#productCategory-edit')
let title = document.querySelector('#productTitle-edit')
let description = document.querySelector('#productDescription-edit')
let price = document.querySelector('#productPrice-edit')
let data = ''
let key = ''

async function pageInitialize() {
    // fill in card with current data
    key = sessionStorage.getItem('product-key')

    const productRef = databaseRef(db, `Products/${key}`)
    const productSnapShot = await get(productRef)
    data = productSnapShot.val()
    console.log(data)

    image.src = data.imageUrlPath
    category.value = data.category
    title.value = data.title
    description.value = data.description
    price.value = data.price

}

pageInitialize()


// set all data in card to new or same values
const submitProductButton = document.querySelector('#productForm-edit')
const productImageInput = document.querySelector('#productImage-edit')

submitProductButton.addEventListener('submit', onUpdateProduct)
productImageInput.addEventListener('change', newImageSelected)

function newImageSelected(e) {
    let file = e.target.files[0]

    image.src = URL.createObjectURL(file)
}

function onUpdateProduct(e) {
    e.preventDefault()
    updateProduct()
}

async function updateProduct() {
    imageFile = imageFile.files[0]
    console.log(imageFile)

    if (imageFile === undefined) {
        imageFileName = data.imageFileName
    } else {
        imageFileName = imageFile.name
        oldImageRef = storageRef(storage, `Product Images/${data.imageFileName}`)
        deleteObject(oldImageRef)
    }

    category = category.value.trim()
    title = title.value.trim()
    description = description.value.trim()
    price = price.value.trim()

    const newImageRef = storageRef(storage, `Product Images/${imageFileName}`)
    const dataRef = databaseRef(db, `Products/${key}`)

    const uploadImage = await uploadBytes(newImageRef, imageFile)

    const imageUrlPath = await getDownloadURL(newImageRef)

    const storagePath = uploadImage.metadata.fullPath

    set(dataRef, {
        key: key,
        sku: `lkjh${key}`,
        imageUrlPath,
        storagePath,
        category,
        title,
        description,
        price,
        imageFileName
    })

}


