		let fWelcome = function(user){                 //функция приветствия welcome
			let spanOld=document.querySelector('span')
			let spanNew=document.createElement('span')
			spanNew.id="user_id"
			spanNew.textContent=user
			spanOld.replaceWith(spanNew)
			const formActive = document.getElementById("welcome")
			formActive.classList.add('welcome_active')
			return
		}		
		//localStorage.removeItem('user_id')   //Для отладки	
		let triger=0                  // проверка наличия user_id в localStorage и выставление триггера
		for(let key in localStorage) {
			if (key == 'user_id') {
				triger=1
			}
		}
		if (triger==1){
			//localStorage уже содержит ключ user_id
			const formActive = document.getElementById('signin')//закрытие окна формы
			formActive.classList.remove('signin_active')

			let userId=localStorage.getItem('user_id')	
			fWelcome(userId)
		}else{	
			//новый пользователь
			const form = document.getElementById('signin__form')
			form.addEventListener('submit', (e) =>{  //обработка события нажатия кнопки
				e.preventDefault()					 //отмена отправки формы по умолчанию
			
				const formActive = document.getElementById('signin')//закрытие окна формы
				formActive.classList.remove('signin_active')
			
				const xhr = new XMLHttpRequest
				xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/auth' )	
				xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );

				//Ввод данных из формы  НЕ ПОЛУЧИЛСЯ!
				var inputs=form.elements
				console.log('login',inputs)
				xhr.send( 'login=demo&password=demo' )//!необходимо создать строку из данных формы

				xhr.addEventListener('readystatechange',()=>{
					const obj = JSON.parse(xhr.responseText) //ответ с сервера в формате JSON
					localStorage.setItem('user_id',obj.user_id) //!записываем user_id в localStorage
			
					fWelcome(obj.user_id)
				})
			})
		}
        
