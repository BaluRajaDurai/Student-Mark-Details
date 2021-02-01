function check()
    {		
			var flag=0;
			var email = document.forms["Form"]["email"].value;
			var pass = document.forms["Form"]["pass"].value;
			var cnfrmpass = document.forms["Form"]["cnfrmpass"].value;
			var name = document.forms["Form"]["name"].value;
			var rollno = document.forms["Form"]["rollno"].value;
			
	   if (email == ""||cnfrmpass==""||name==""||rollno=="" ||pass=="") {
				alert("All Fields must be filled!!!");
				flag=1;
       }
      if (!/^[a-zA-Z0-9]+$/.test(name)){
				alert("Invalid Name");
				flag=1;
      }
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,6})+$/.test(email)){
			alert("You have entered an invalid email address!");
			flag=1;
		}
      var len=pass.length;
      if(len<8||len>12){
				alert("Password should be greater than 8 and less than 12 characters");
				flag=1;
	  }
		if (pass != cnfrmpass) {
				alert("Password should match confirm password!!!");
				flag=1;
        }
      if(flag==0&&confirm("Are you sure ?"))
         alert("Register Successful");
    }