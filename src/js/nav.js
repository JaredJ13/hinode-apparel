const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')
const menuIcon = document.querySelector('.bi-list')
const exitIcon = document.querySelector('.bi-x-lg')

navToggle.addEventListener('click', function () {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', "true")
        navToggle.setAttribute('aria-expanded', "true")

        menuIcon.classList.add('hidden')
        exitIcon.classList.remove('hidden')
    } else {
        primaryNav.setAttribute('data-visible', "false")
        navToggle.setAttribute('aria-expanded', "false")
        menuIcon.classList.remove('hidden')
        exitIcon.classList.add('hidden')
    }
})