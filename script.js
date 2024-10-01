"use strict"

const resp_menu = document.getElementById("resp_menu")
const resp_menu_open = document.getElementById("resp_menu_open")
const resp_menu_close = document.getElementById("resp_menu_close")

resp_menu_open.addEventListener("click",open_menu)

function open_menu(event) {
    event.preventDefault()
    resp_menu.style.transform = "translate(0%,0%)"
}

resp_menu_close.addEventListener("click",close_menu)

function close_menu(event) {
    event.preventDefault()
    resp_menu.style.transform = "translate(0%,-100%)"
}

function close_menu_btn() {
    resp_menu.style.transform = "translate(0%,-100%)"
}