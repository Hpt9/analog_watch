for(let i=0;i<360;i+=6){
    let div = document.createElement("div");
    let degree=i+"deg";
    div.setAttribute("style",`transform: rotate(${degree}) translateY(190px);`)
    div.classList.add("seconds-dots")
    document.querySelector(".dotes").appendChild(div);
}
for(var k=0;k<360;k+=30){
    let div2 = document.createElement("div");
    let degree=k+"deg";
    div2.setAttribute("style",`transform: rotate(${degree}) translateY(187px)`)
    div2.classList.add("hour-dotes")
    document.querySelector(".dotes").appendChild(div2);
}
for(var l=1;l<=12;l++){
    let div3 = document.createElement("div");
    let degree=l*30+"deg";
    let p=document.createElement("p")
    p.innerText=l
    p.setAttribute("style",`transform: rotateZ(${180-l*30}deg);font-size:23px;`)
    div3.setAttribute("style",`margin-top: 181px;position: absolute;right:-13px;transform: rotate(${degree}) translateY(159px);`)
    div3.classList.add("hours-text")
    div3.appendChild(p)    
    document.querySelector(".dotes").appendChild(div3);
}
function displayTime() {
    let date=new Date()
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let weekday=date.getDay();
    let degree_s = 0;
    let degree_m = 0;
    let degree_h = 0;
    let index_of_weekday=weekday
    document.querySelector(".big").innerText=`${hours<10?"0"+hours:hours}:${minutes<10?"0"+minutes:minutes}`
    document.querySelector("small").innerText=`${seconds<10?'0'+seconds:seconds}`;
    for(let second = 0; second<=seconds;second++){
        document.querySelector('.seconds-line').style.transform = `translate(-50%, -50%) rotate(${90+degree_s}deg)`;
        degree_s+=6;
    }
    for(let minute = 0; minute<=minutes;minute++){
        document.querySelector('.minute-line').style.transform = ` translate(-50%, -50%) rotate(${90+degree_m}deg)`;
        degree_m+=6;
    }
    for(let hour = 0; hour<=hours;hour++){
        document.querySelector('.hour-line').style.transform = `translate(-50%, -50%) rotate(${90+degree_h}deg)`;
        degree_h+=30;
    }
    setTimeout(displayTime,1000)
    switch (weekday) {
        case 1:
            weekday="B.Ertəsi";
            break;
        case 2:
            weekday="Ç.Axşamı";
            break;
        case 3:
            weekday="Çərşənbə";
            break;
        case 4:
            weekday="C.Axşamı";
            break;        
        case 5:
            weekday="Cümə";
            break;
        case 6:
            weekday="Şənbə";
            break;        
        case 0:
            weekday="Bazar";
            break;

        default:
            break;
    }
    document.querySelector(".weekday").innerText=`${weekday} ${index_of_weekday+1}`
}
window.onload=displayTime();