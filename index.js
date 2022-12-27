let  clock = ()=>{
    var hours = document.querySelector('#hours');
    var hour;
    var meridan = 'AM'
    if (new Date().getHours()>12){
        hour = ((new Date().getHours())%12) 
        meridan = 'PM'

    }
    else
        hour = new Date().getHours();
    hours.textContent = hour;
    var mins = document.getElementById('minutes');
    mins.innerText = new Date().getMinutes();
    var secs = $('#secs')
    secs[0].innerText = new Date().getSeconds();
    var merid =  document.querySelector('#mer');
    merid.textContent = meridan
    let wakeup = document.querySelector('#WakeupTime');
    let afternoon = document.querySelector('#lunchTime')
    let evening = document.querySelector('#napTime')
    let night = document.querySelector('#nightTime')
    if (new Date().getHours() == wakeup.value){

        document.querySelector('#good-morning').textContent = "GOOD MORNING!! WAKE UP !!"
        document.querySelector('#noon-text').textContent = "GRAB SOME HEALTHY BREAKFAST!!!"
        document.querySelector('#images').style.backgroundImage = "URL(./assets/morning.png)"
    }
    else if (new Date().getHours() == afternoon.value){
        document.querySelector('#good-morning').textContent = "GOOD AFTERNOON !! TAKE SOME SLEEP"
        document.querySelector('#good-morning').style.fontSize = '24px'
        document.querySelector('#noon-text').textContent = "LET'S HAVE SOME LUNCH !!"
        document.querySelector('#images').style.backgroundImage = "URL(./assets/actuallunch.png)"
    }
    else if (new Date().getHours() == evening.value){
        document.querySelector('#good-morning').textContent = "GOOD EVENING !!"
        document.querySelector('#noon-text').textContent = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        document.querySelector('#images').style.backgroundImage = "URL(./assets/lunch_image.png)"
    }
    else if (new Date().getHours() == night.value){
        document.querySelector('#good-morning').textContent = "GOOD NIGHT !!"
        document.querySelector('#noon-text').textContent = "CLOSE YOUR EYES AND GO TO SLEEP"
        document.querySelector('#images').style.backgroundImage = "URL(./assets/sleep.png)"
    }
    else{
        document.querySelector('#good-morning').textContent = ""
        document.querySelector('#noon-text').textContent = ""
        document.querySelector('#images').style.backgroundImage = "URL(./assets/)"
    }

    let setAlarm =  document.querySelector('#set-alarm')
    let mrngt = document.querySelector('#mrng-time')
    let aft = document.querySelector('#aft-time')
    let evgt = document.querySelector('#eng-time')
    let nyt = document.querySelector('#nyt-time')
    
    setAlarm.addEventListener('click',()=>{

        setAlarm.textContent = 'Party time!'
        let a = wakeup.options[wakeup.selectedIndex].text
        let b = afternoon.options[afternoon.selectedIndex].text
        let c = evening.options[evening.selectedIndex].text
        let d = night.options[night.selectedIndex].text
        if (a != 'Default' && b != 'Default' && c != 'Default' && d != 'Default'){
            console.log(nyt.textContent)
            mrngt.textContent =  "MORNING Time :" + a 
            aft.textContent = "Lunch Time : "+ b
            evgt.textContent = "Nap Time : " + c
            nyt.textContent = "Night Time : "+ d
        }
        
            
        

    })
    setAlarm.addEventListener('dblclick',()=>{
        setAlarm.innerHTML = 'Set Alarm' 
        mrngt.textContent =  ""
        aft.textContent = ""
        evgt.textContent = ""
        nyt.textContent = ""     
        
    })
}
setInterval(clock,1000);