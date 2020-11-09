   let MyPlusCircle = document.querySelector(".plus-circle");
   let MyInputAdd = document.querySelector(".input-add");
   let MyBtn  = document.querySelector(".btn");
   let MyInputBox = document.querySelector(".input-text");
   let todoContents = document.querySelector(".todo-content2");
   let date = document.querySelector(".date")
   
  



   MyPlusCircle.addEventListener("click", function(){
   MyInputAdd.style.display = "block"
   MyPlusCircle.style.display = "none"
   MyInputBox .value = "";
   });
   
   MyBtn.addEventListener("click", function(){
   if(MyInputBox.value  === "") {alert("input caanot be empty")}
   else { let todo = document.createElement("ul");
   let list = document.createElement("li");
   let delBtn = document.createElement("i");
   let checkbox = document.createElement("input");
   let trash = document.querySelector(".trash");
   list.classList.add(".trash");
      
      
      delBtn.className = "fa trash fa-trash-o";
      list.textContent = MyInputBox.value;
      checkbox.type = "checkbox";
      todoContents.appendChild(todo);
      todo.appendChild(list);
      todo.appendChild(delBtn);
      todo.appendChild(checkbox);
      MyInputAdd.style.display = "none"
      MyPlusCircle.style.display = "block"
     
      delBtn.addEventListener("click", function(){
         todo.remove ();
      });
      
      checkbox.addEventListener("click", function(){
         if (checkbox.checked === true) {
            todo.style.background = "blue"
            list.style.color= "red"
         }
         else{
            list.style.color= "black"
            todo.style.background = "white"
         }
      });
   }
   
   
});



    

   













   






