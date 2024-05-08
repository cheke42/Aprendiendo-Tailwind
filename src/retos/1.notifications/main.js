// -> CONST
const 
markAll = document.querySelector('#mark-all'),
numberElement = document.querySelector('.number'),
posts = document.querySelectorAll('.post');

// -> EVENT LISTENER
markAll.addEventListener("click",(ev) => {
    const notReadElements = document.querySelectorAll('.not-read')
    notReadElements.forEach((notReadElement) => {
        notReadElement.classList.remove('not-read')
    })
    updateNotifications()
})

posts.forEach((post) => {
    post.addEventListener("click",(ev) => {
        post.querySelector(".not-read").classList.remove('not-read')
        updateNotifications()
    })
})

// -> FUNCTIONS
const updateNotifications = () =>{
    const 
    notReadElementsActual = document.querySelectorAll('.not-read');
    numberElement.innerText = notReadElementsActual.length
}