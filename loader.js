const loader = document.querySelector('.loader')
const app = document.querySelector('#app')

const load = () => {
    setTimeout(() => {
        loader.style.display = 'none';
        app.style.display = 'block';
    }, 2000)
}

load()