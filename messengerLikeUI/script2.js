function goFirstChat() {
    document.getElementsByClassName("welcomepage")[0].style.display = "none";
    document.getElementsByClassName("container two")[0].style.display = "none";
    document.getElementsByClassName("container three")[0].style.display = "none";
    document.getElementsByClassName("container one")[0].style.display = "block";
}

function goSecondChat() {
    document.getElementsByClassName("welcomepage")[0].style.display = "none";
    document.getElementsByClassName("container one")[0].style.display = "none";
    document.getElementsByClassName("container three")[0].style.display = "none";
    document.getElementsByClassName("container two")[0].style.display = "block";
}

function goThirdChat() {
    document.getElementsByClassName("welcomepage")[0].style.display = "none";
    document.getElementsByClassName("container two")[0].style.display = "none";
    document.getElementsByClassName("container one")[0].style.display = "none";
    document.getElementsByClassName("container three")[0].style.display = "block";
}

let messageFirst = [];

function addMessage(text){
    const chat = {
        text,
        id: Date.now()
    }
    messageFirst.push(chat);
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend',
        `<p class="message-item" data-key="${chat.id}">
            <span>${chat.text}</span>
        </p>`
    );
}

const form = document.querySelector('.message-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.typedMessage');
    const text = input.value.trim();
    if (text !== '') {
        addMessage(text);
        input.value = '';
        input.focus();
    }
});
