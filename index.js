let frm=document.getElementById("frm")
let i1=document.getElementById("i1").value
let i2=document.getElementById("i2").value
let btn=document.getElementById("btn")
let tbody=document.getElementById("tbody")
//dataset
let data=[
    {name:"koyel",age:19},
    {name:"maitri",age:20}
]
//(R)READ
function readdata(){
    tbody.innerHTML=""
data.map((e,i)=>{
    let tr= document.createElement("tr")
    tr.innerHTML=`
        <td>${i+1}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
       <td><button onclick="editdata(${i})">edit</button></td>
       <td><button onclick="deletedata(${i})">delete</button></td>
        `
    tbody.append(tr)
    })
}
readdata()
//(c)ADD FUNCTION and update
let editindex = null
frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let i1=document.getElementById("i1").value
    let i2=document.getElementById("i2").value
    let obj={name:i1,age:i2}
    if(editindex==null)//insert
    {
     data.push(obj);   
    }
    else{
        data[editindex]=obj
        editindex=null
        document.getElementById("btn").innerHTML="Save"
        document.getElementById("hd").innerHTML="CRUD OPERATION"    
    }
    readdata()
    frm.reset()
})
//delete
function deletedata (i){
    if(window.confirm("ARE YOU SURE ?")){
       data.splice(i,1)//splice(index number,how many elements you want to remove)
       readdata()
       frm.reset()
    }
}
//[U]edit
//step2
function editdata(i){
    document.getElementById("i1").value=(data[i].name)
    document.getElementById("i2").value=(data[i].age)
    document.getElementById("btn").innerHTML="Update"
    document.getElementById("hd").innerHTML="Update Form"
    editindex=i
}