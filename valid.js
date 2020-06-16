function fname_val()
        {
            var data=document.getElementById("first").value;
            var reg=/^[A-Za-z\s\'\-]{2,15}$/;
            if(reg.test(data))
            {
                document.getElementById("msg_first").style.color="green";
                document.getElementById("msg_first").innerHTML="Valid";
            }
            else
            {
                document.getElementById("msg_first").style.color="Red";
                document.getElementById("msg_first").innerHTML="Enter 2-15 Characters";
            }
        }
            function lname_val()
            {
             var data=document.getElementById("second").value;
             var reg=/^[A-Za-z\s\'\-]{2,15}$/;
             if(reg.test(data))
            {
                document.getElementById("msg_last").style.color="green";
                document.getElementById("msg_last").innerHTML="Valid";
            }
            else
            {
                document.getElementById("msg_last").style.color="Red";
                document.getElementById("msg_last").innerHTML="Enter 2-15 Characters";
            }
            }
            function phone_val()
            {
             var data=document.getElementById("third").value;
             var reg=/^\d{10}$/;
             if(reg.test(data))
            {
                document.getElementById("msg_phone").style.color="green";
                document.getElementById("msg_phone").innerHTML="Valid";
            }
            else
            {
                document.getElementById("msg_phone").style.color="Red";
                document.getElementById("msg_phone").innerHTML="Enter 10 digits";
            }
            }
            function add_val()
            {
             var data=document.getElementById("fourth").value;
             var reg=/^[A-Za-z\s\'\-]{2,15}$/;
             if(reg.test(data))
            {
                document.getElementById("msg_add").style.color="green";
                document.getElementById("msg_add").innerHTML="Valid";
            }
            else
            {
                document.getElementById("msg_add").style.color="Red";
                document.getElementById("msg_add").innerHTML="Enter your address";
            }
            }

function myfunction()
{
    var checkBox = document.getElementById("mycheck1");
    var text = document.getElementById("amt1");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
   
  function myfunction2()
{
    var checkBox = document.getElementById("mycheck2");
    var text = document.getElementById("amt2");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  function myfunction3()
  {
      var checkBox = document.getElementById("mycheck3");
      var text = document.getElementById("amt3");
      if (checkBox.checked == true){
        text.style.display = "block";
      } else {
         text.style.display = "none";
      }
    }
    function myfunction4()
  {
      var checkBox = document.getElementById("mycheck4");
      var text = document.getElementById("amt4");
      if (checkBox.checked == true){
        text.style.display = "block";
      } else {
         text.style.display = "none";
      }
    }
    function confirm1()
    {
        var a=document.getElementById("first").value;
        var b=document.getElementById("second").value;
        var c=document.getElementById("third").value;
        var d=document.getElementById("fourth").value;
        var x=document.getElementById("amt1").value;
        var y=document.getElementById("amt2").value;
        var z=document.getElementById("amt3").value;
        var w=document.getElementById("amt4").value;
        var total=(x*40)+(y*350)+(z*50)+(w*30);
        if(a==""&&b==""&&c==""&&d=="")
        {
            alert("PLease Enter the details")
        }
        else
        {
        alert("You Order has been recorded.\nTotal amount:Rs"+total);
        }

    }
    