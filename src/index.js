const init = () => {
    const inputForm = document.querySelector("form")

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID")
        //event.target.children[1].value
        console.log(input.value)

        fetch("http://localhost:3000/movies")
            .then((res) => res.json())
            .then((data) => {
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p")

                title.innerText = data.title;
                summary.innerText = data.summary;
                //console.log(data)
            });
    });
  
}

document.addEventListener('DOMContentLoaded', init);