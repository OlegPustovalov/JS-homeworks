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

		if (localStorage.getItem('user_id')!=null){             //localStorage уже содержит ключ user_id
			const formActive = document.getElementById('signin')//закрытие окна формы
			formActive.classList.remove('signin_active')

			let userId=localStorage.getItem('user_id')	
			fWelcome(userId)
		}	

        //в task.html  <form action="https://netology-slow-rest.herokuapp.com/auth.php" id="signin__form" name="register">
		document.forms.register.addEventListener('submit', (e) =>{  //обработка события нажатия кнопки
			e.preventDefault()					 //отмена отправки формы по умолчанию
			
			const formActive = document.getElementById('signin')//закрытие окна формы
			formActive.classList.remove('signin_active')
			
			const xhr = new XMLHttpRequest
			xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/auth' )	
			xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );

			xhr.responseType='json'    //для ответа с сервера (response) в формате JSON

			const  formData = new FormData(document.forms.register)
			xhr.send(formData) 

            //xhr.send( 'login=demo&password=demo' )   //необходимо создать строку из данных формы
			xhr.addEventListener('load',()=>{	
				localStorage.setItem('user_id',xhr.response.user_id)   //записываем user_id в localStorage
				console.log('!!!!',xhr.response.user_id)
				fWelcome(xhr.response.user_id)
			})
		})
		
        