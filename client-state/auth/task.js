   	    function transferComplete(evt) {
  			console.log("Загрузка завершена.")
			console.log('Статусы: httpRequest.status='+xhr.status+', httpRequest.readyState='+xhr.readyState)
            //Статусы: httpRequest.status=201, httpRequest.readyState=4
		}
        const xhr = new XMLHttpRequest;
		xhr.addEventListener("load", transferComplete)

		xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/auth' )	
		xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
		xhr.send( 'login=demo&password=demo' )//!необходимо создать строку из данных формы

		xhr.addEventListener('readystatechange',()=>{
			console.log(xhr.responseText)  //{"success":true,"user_id":657}
            //!необходимо записать user_id в localStorage
            //! приветствие в окне
		})
        