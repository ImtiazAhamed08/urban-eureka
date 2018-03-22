function loadJSON(file, callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("applicaton/json");
  xhr.open("GET",file, true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  Skills(data.Skills);
})
var right=document.querySelector(".CONTENT");
function career(car){
  console.log(car.info);
  var h2=document.createElement("h2");
  h2.textContent="Career Objective";
  right.appendChild(h2);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info;
  right.appendChild(p);
}
function education(edu){
  var h3=document.createElement("h3");
  h3.textContent="Educational Qualifications:";
  right.appendChild(h3);
  var ul=document.createElement("ul");
  right.appendChild(ul);
  console.log(edu.length);
  for(var i=edu.length-1;i>=0;i--){
  var li=document.createElement("li");
  li.textContent=edu[i].Degree;
  ul.appendChild(li);
  var p=document.createElement("p");
  p.textContent=edu[i].School;
  ul.appendChild(p);

  var x=document.createElement("p");
  x.textContent=edu[i].data;
  ul.appendChild(x);
  }
}
function Skills(ski){
  var h3=document.createElement("h3");
  right.appendChild(h3);
  h3.textContent="Skills:";
  var table=document.createElement("table");
  table.border="1";
  right.appendChild(table);
  let row="";
  for(var i=0;i<ski.length;i++){
    row+="<tr><td>"+ski[i].name+"</td><td>"+ski[i].info+"</td></tr>";
  }
  table.innerHTML=row;
}
