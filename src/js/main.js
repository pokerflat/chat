
function chatbot_msg (text_msg) {
    let msg = (text_msg);
    let el = document.getElementById('bot_message');
    el.innerText = msg;
}
chatbot_msg('Привет, я бот');

