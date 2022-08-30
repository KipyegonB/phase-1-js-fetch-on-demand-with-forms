const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        const input=document.getElementById("input#searchByID")
        event.preventDefault
    fetch (`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(data=> {
    const title = document.getElementById("title")
    const summary = document.getElementsById("summary")
    title.innerHTML = data.title
    summary.innerHTML= data.summary
    })
    });
}

document.addEventListener('DOMContentLoaded', init);

