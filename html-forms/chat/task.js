//генератор случайного выбора номера элемента списка сообщений Робота
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
let fOpenChat = function() {
    divChat.classList.add('chat-widget_active')
}

//По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения и ответ робота
let fClient = function(event) {
      let input = document.querySelector('input');
      messegeClient = input.value
      if( event.key === 'Enter' && input.value!='' && input.value!=' '){      
        messages = document.querySelector ('.chat-widget__messages')
        messages.innerHTML += 
        `<div class="message message_client">
            <div class="message__time">09:21</div>
            <div class="message__text">
              ${messegeClient}
            </div>
          </div>`
          let messegeRobot = messegeRobots[getRandomInt(3)]
          messages.innerHTML += 
          `<div class="message">
              <div class="message__time">09:21</div>
              <div class="message__text">
                ${messegeRobot}
              </div>
            </div>`
        
          input.value=''          
    } 
    
}

let messegeRobots = ["Бу-Бу-Бу", "Сам ответить не можешь что ли?","Давай пока"]
let messegeClient = ''

let divChat= document.querySelector ('.chat-widget')
divChat.onclick=fOpenChat
document.addEventListener( 'keyup', fClient)