const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const textarea = form.querySelector('textarea');
    const content = textarea.value;

    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#server-response').textContent = data.message;
        });
});
