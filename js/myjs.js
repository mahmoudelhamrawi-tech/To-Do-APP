
let fristname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let age = document.getElementById("age");
let mybtn = document.getElementById("mybtn");
let clrall = document.getElementById("clrall");
let arr;
let inx=0;
let toggle=false;


    
mybtn.addEventListener("click",function(e){
    // check enter values
    if(fristname.value=='' || lastname.value=='' || age.value=='')
    {
      document.querySelector(".art").innerHTML=`<h3 class="alert alert-warning  text-center ">Plz. Type Value and Reload ur App</h3>`;
      setTimeout(()=>{ document.querySelector(".art").classList.add("hid");
    },2000)


      return false;
    }else{
        document.querySelector(".arts").innerHTML=`<h3 class="alert alert-success  text-center"> Value Add</h3>`;

    }


    //defaulte way
    if(!toggle)
    {
        add();
        dis();
        clrarform();
        // press update btn enter here
    }else{
     
        updates();
        mybtn.innerHTML='ADD';
        clrarform();
        toggle=false;
    }
  
})
// add object then add in array
let add = ()=>{
    let obj ={
        myfname:fristname.value,
        mylanme:lastname.value,
        myage:age.value
      }
arr.push(obj);
localStorage.setItem("data students",JSON.stringify(arr))
}

// show data
let dis = ()=>{
 let car="";
 for(let i=0;i<arr.length;i++)
   {
     car +=`
     <tr>
     <td>${arr[i].myfname}</td>
     <td>${arr[i].mylanme}</td>
     <td>${arr[i].myage}</td>
     <td><button class="btn btn-danger" onclick="del(`+i+`)"><i class="fas fa-trash"></i></button></td>
     <td><button class="btn btn-warning" onclick="up(`+i+`)"> <i class="fas fa-edit"></i></button></td>
     </tr>
     `
 }
document.getElementById("show").innerHTML=car;
}

       
// when press delete btn
let del=(i)=>{
  arr.splice(i,1);
//   document.getElementById("df").parentNode.parentNode.remove();
  localStorage.setItem("data students",JSON.stringify(arr))
  dis();
 
}
// clear forms after write
let clrarform= ()=>{
    let forms = document.getElementsByClassName("form-control");
    for(let i=0;i<forms.length;i++)
    {
     forms[i].value="";
    }
}
// when press update btn
let up= (i)=>{
 fristname.value=arr[i].myfname;
 lastname.value=arr[i].mylanme;
 age.value=arr[i].myage;
 toggle=true;
 inx=i;
 mybtn.value="UpDate"

 


}
// resulte  press upadte btn
let updates =()=>{
    mybtn.value="ADD";
    arr[inx].myfname=fristname.value;
    arr[inx].mylanme=lastname.value;
    arr[inx].myage=age.value;

localStorage.setItem("data students",JSON.stringify(arr))
dis();



}

// when press lear all btn from html
let sss =()=>{
     document.getElementById("show").remove();
     localStorage.setItem("data students",JSON.stringify(arr=[]));
     document.getElementById("foot").remove();
     document.querySelector(".remove").innerHTML=`<h3 class="alert alert-danger  text-center"> Delete All</h3>`
   

}



//local stortage
if(localStorage.getItem==null){
  arr=[];
  }else{
  arr=JSON.parse(localStorage.getItem("data students"));
  dis();
  }

