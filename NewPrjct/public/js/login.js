function check()
    {
			var email = document.forms["Form"]["email"].value;
			var flag=0;
			var pass = document.forms["Form"]["password"].value;
			if (email == "") {
				alert("email must be filled!!!");
				flag=0;
			}
			if (pass == "") {
				alert("Password must be filled!!!");
				flag=1;
			}
			if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,6})+$/.test(email))
			{	
				alert("You have entered an invalid email address!");
				flag=1;
			}
			var l=pass.length;
			if(l<8||l>12){
				alert("Password should be greater than 8 and less than 12");
				flag=1;
			}
			if(flag==0){
			confirm("Are you sure ?")
				alert("Login Successful");
			}
    }
