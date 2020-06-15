var x =0
function addToDo(){
    console.log("Adding a new task");
    //get the value from input
   // var text=document.getElemnetById("txt-task").value;
   var text=$("#txt-task").val();
   //if(text= 0; 0<text; text=+);
   if(text!=""){
    console.log(text);
    $("#txt-task").val("");//cleart the input

    //creat the list item templates
    var li=`<li id="${x}"> ${text} <button onclick="deleteToDo(${x});"><i class="fas fa-trash-alt"></i>
    </button></li>`;
    x++;
    //display the li under the ul
    $("#pending-list").append(li);

   
   }else{
       alert("you have to enter a task");
   }


 // set the focus to the input
   $("#text-task").focus();//clears the input bar after each entry
}

function deleteToDo(id){
    console.log("Delete funtion is working "+id);
    $("#"+id).remove();


}

function init(){
    console.log("Init executed");
    //sensing the user actions/events
    //document.getElementById("btn-add");
    $("#btn-add").click(addToDo);

    $("#txt-task").keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
            console.log("Add a new task");
            addToDo();
        }
    });
}

//when the browser finishes rendering the HTML, execute init
window.onload=init;