


        //it is page1 of input
        function functioninput()
         {
            let b=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
             let a=document.getElementById('input1');

            if (b.test(a.value))
             {
                alert("email address is matched");
            }
            else if (a.value=='')
             {
                alert("Email is required.");
                a.style.border="red";
            }
            else
            {
                alert('sorry your email id is wrong,please try after some time');
            }

        }
        
        //it is page5 of input  
        function functioninput2()
         {
            let b=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
             let a=document.getElementById('input2');  
             if (b.test(a.value))
             {
                alert("email address is matched");
            }
            else if (a.value=='')
             {
                alert("Email is required.");
                a.style.border="red";
            }
            else
            {
                alert('sorry your email id is wrong,please try after some time');
            }
        }

        // function function_white() 
        // {
        //     // let white=document.getElementById('header1');
        //     let one=document.getElementById('header2');
        //     one.style.background='white';
        //     one.style.color='red';  
        //     // let two=document.getElementsByClassName('page1title');
            
        // }

      
        
       
