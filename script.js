"use strict";

const form = document.querySelector('form')
const input = form.querySelector('input')
const iconError = form.querySelector('.icon-error')
const btn = form.querySelector('.btn')
const textError = document.querySelector('.text-error')

form.addEventListener('submit', e => {
    if (input.value.indexOf('@') === -1 ||
        input.value.indexOf('.') === -1 ||
        input.value.indexOf(' ') !== -1 ||
        input.value === '') {
        e.preventDefault()
        formError()
    }
})

const formError = () => {
    // console.log('error')
    iconError.style.display = 'inline-block'
    textError.style.display = 'block'
    form.style.border = '.025em solid var(--color-alert)'
}