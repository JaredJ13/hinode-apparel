import { DeleteProduct } from '../delete'

function productCard({ imageUrlPath, title, description, price, category, key, imageFileName }) {

    const template = `
    <div class="product-card">
        <div class="product-tumb">
            <img src="${imageUrlPath}" alt="product: ${title}">
        </div>
        <div class="product-details">
            <span class="product-category">${category}</span>
            <h4><a href="">${title}</a></h4>
            <p>${description}</p>
            <div class="product-bottom-details">
                <div class="product-price">$${price}</div>
                <div class="product-links">
                    <a href="edit.html">
                        <svg id="edit" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" data-image = "${imageFileName}" data-key="${key}" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg><i class="fa fa-heart"></i>
                    </a>
                    <a>
                        <svg id="delete" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" data-image = "${imageFileName}" data-key="${key}" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg><i class="fa fa-shopping-cart"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `

    const element = document.createRange().createContextualFragment(template).children[0]
    addButtonControls(element)

    return element
}

function addButtonControls(productCard) {
    productCard.querySelector('#edit').addEventListener('click', EditProductCard)

    productCard.querySelector('#delete').addEventListener('click', DeleteModal)
}

function EditProductCard(e) {
    const key = e.currentTarget.dataset.key
    sessionStorage.setItem('product-key', key)
}

function DeleteModal(e) {
    const modal = document.querySelector('.modal')
    const cancelButton = modal.querySelector('#cancel-delete-button')
    const deleteButton = document.querySelector('#modal-delete-button')

    cancelButton.addEventListener('click', function () {
        modal.style.display = "none"
    })

    modal.style.display = "block"

    const key = e.currentTarget.dataset.key
    const imageFileName = e.currentTarget.dataset.image

    deleteButton.addEventListener('click', function () {
        DeleteProduct(key, imageFileName)
        modal.style.display = "none"
        document.location.reload()
    })
}


export { productCard }