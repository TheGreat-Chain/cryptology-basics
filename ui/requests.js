const hashForm = document.querySelector('.hash-form');
const encryptionForm = document.querySelector('.encryption-form');
const decryptionForm = document.querySelector('.decryption-form');

hashForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const textarea = hashForm.querySelector('textarea');
    const content = textarea.value;

    const select = hashForm.querySelector('select');
    const chosenAlgo = select.value;

    fetch('http://localhost:3000/hash', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content, chosenAlgo})
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#server-response-hash').textContent = "Réponse  :" + data.message;
        });
});

encryptionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const textarea = encryptionForm.querySelector('textarea');
    const content = textarea.value;

    const select = encryptionForm.querySelector('select');
    const chosenAlgo = select.value;

    const input = document.querySelector('input[name="key"]');
    const key = input.value;


    fetch('http://localhost:3000/encrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content, chosenAlgo, key })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#server-response-encryption').textContent = "Réponse  :" + data.message;
        });
});

decryptionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const textarea = decryptionForm.querySelector('textarea');
    const content = textarea.value;

    const select = decryptionForm.querySelector('select');
    const chosenAlgo = select.value;

    const input = document.querySelector('input[name="decryption-key"]');
    const key = input.value;


    fetch('http://localhost:3000/decrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content, chosenAlgo, key })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#server-response-decryption').textContent = "Réponse  :" + data.message;
        });
});


