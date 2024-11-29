toggle_menu_status = false
overflow_menu = document.querySelector('#overflow-menu-mobile')
overflow_menu_links = document.querySelectorAll('.overflow-menu-links')

overflow_menu_links.forEach((e) => {
    e.addEventListener('click',toggle_menu)
});


function toggle_menu(){
    if (toggle_menu_status === false){
        console.log('false', overflow_menu.style.rigth)
        toggle_menu_status = true
        overflow_menu.style.right = '0vh'
    }
    else{
        console.log('true', overflow_menu.style.rigth)
        toggle_menu_status = false
        overflow_menu.style.right = '-100vw'
    }
}