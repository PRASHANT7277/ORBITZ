 //----for del alert----
 let x=document.getElementById("alert")
 function remove(){
     x.remove()
 }


//----for appending signin div orbucks-------      
let sign=document.getElementById('signin')
let hide=document.getElementById("show")
let app=document.getElementById("earn")
hide.addEventListener('click',function(){
if(sign.style.display==='block'){
   sign.style.display='none'
}else{
  sign.style.display='block'
  app.append(sign)
}
})

//---for getting successful earn-----
let onbucks=document.getElementById('done')
onbucks.addEventListener("click",function(){
 event.preventDefault()
 let user=JSON.parse(localStorage.getItem("********"))
 let emadd=document.getElementById("earnemail").value;
 let pass=document.getElementById("earnpass").value;
 if(user.email===emadd && user.password===pass){
     alert("Hurray! Enjoy your benefits")
 }
 else{
     alert("pls fill correct password")
 }
})


//------to get a updated msg on my number-----
document.getElementById("receive").addEventListener("click",message)
function message(){
let name=document.getElementById("john").value;
let lastname=document.getElementById("smith").value;
let cont=document.getElementById("count").value;

console.log("name,lastname,cont")
}
message()

//---------create an acc-----



//-------for succesful payment----->

document.getElementById("pay").addEventListener("click",payment)
let card=JSON.parse(localStorage.getItem("carddetails"))||[]
function payment(){

    let mail=document.getElementById("gmail").value;
    let cpass=document.getElementById("crpass").value;
    let fpass=document.getElementById("cfpass").value;

    if(cpass!==fpass){
        alert('wrong password')
    }
    else{
        alert('successful create account')
    }
  
    let cardobj={
        name:document.getElementById("cardname").value,
        number:document.getElementById("cardnumb").value,
        month:document.getElementById("month").value,
        year:document.getElementById("year").value,
        code:document.getElementById('scode').value,
        zip:document.getElementById("zip").value,
    }

   card.push(cardobj)
    console.log(card);
    localStorage.setItem("carddetails",JSON.stringify(cardobj))
    //window.location.href='trip.html'

}




//------data from ls and appending----->

// let url='https://images.unsplash.com/photo-1655216985244-3575ff74cb67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
function dataappend(){
    let data=JSON.parse(localStorage.getItem("hotel"))||[];
    let key=JSON.parse(localStorage.getItem("detail"))||[];
    let container= document.getElementById('appending')
    data.forEach(function(ele){
        // let div=document.createElement("div")
        let image=document.createElement("img");
        image.src=ele.img;
        
        let trip=document.createElement(p);
        trip.innerText=key[0];
        container.append(image,trip)
        // div.append(image)
       
        
    })
    
}
dataappend()


///-----for price calculation-----

function price(){
    let pr=JSON.parse(localStorage.getItem("price"))||[]
    let p=document.createElement("h1")
    p.innerText=pr[price];
    let con=document.getElementById("price").append(p)
}

price()

