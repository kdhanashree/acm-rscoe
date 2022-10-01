import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from "react-router-dom"

const Latest = () => {
    useEffect(() => {
         Aos.init({duration:2000})
    },[])
    return (
//         <div id='code-div' >
//         <div className='concept'>
//             <h1 style={{padding:10}}>Concept of the Day</h1> 
//             <h1 style={{padding:20}}><i> Map function in JavaScript</i></h1>
//             <p style={{padding:20,fontSize:25}}>In JavaScript, map() function is generally used with arrays. The map() function is a higher order function. It takes another function as a parameter. It calls the function which is passed as a parameter against all the elements in the array and returns a whole new array containing the new elements. Lets take an example :</p>
//             <iframe
//   src="https://carbon.now.sh/embed?bg=rgba%2856%2C182%2C255%2C1%29&t=monokai&wt=none&l=auto&width=680&ds=true&dsyoff=5px&dsblur=68px&wc=true&wa=true&pv=24px&ph=72px&ln=false&fl=1&fm=Hack&fs=16.5px&lh=125%25&si=false&es=2x&wm=false&code=const%2520arr%2520%253D%2520%255B1%252C%25202%252C%25203%252C%25204%252C%25205%255D%250A%252F%252Flets%2520say%2520we%2520have%2520to%2520create%2520a%2520new%2520array%2520which%2520contains%2520squares%2520of%2520all%2520the%2520elements%2520present%2520in%2520the%2520array%2520arr.%250A%250Afunction%2520square%28num%29%2520%257B%250A%2520%2520return%2520num%2520*%2520num%250A%257D%250A%250Aconst%2520newArr%2520%253D%2520arr.map%28square%29%250A%250Aconsole.log%28newArr%29%250A%252F%252Foutput%2520%253A%2520%255B%25201%252C%25204%252C%25209%252C%252016%252C%252025%2520%255D%250A%250A%252F%252Fconsole.log%28arr%29%2520output%253D%253E%255B1%252C2%252C3%252C4%252C5%255D%250A"
//   className='code'
//   sandbox="allow-scripts allow-same-origin">
// </iframe>
//             <p style={{padding:20,fontSize:25}}>In above code, the function square is passed as a parameter to map() function It calls the square function for all the elements present in the array arr and returns a whole new array which contains the squares of all the elements.
// <br/>
// <br/>
// <b>NOTE:</b> map() function do not mutate/change the original array. ex. if we output the original array in above code, the arr is still the same!</p>

// <p style={{padding:20,fontSize:25}}>There are many ways to write a map() function. The first way was the one which we used in the above code. Now, lets see some another ways:</p>

// <iframe
//   src="https://carbon.now.sh/embed?bg=rgba%2856%2C182%2C255%2C1%29&t=monokai&wt=none&l=auto&width=680&ds=true&dsyoff=5px&dsblur=68px&wc=true&wa=true&pv=24px&ph=72px&ln=false&fl=1&fm=Hack&fs=16.5px&lh=125%25&si=false&es=2x&wm=false&code=const%2520arr%2520%253D%2520%255B1%252C3%252C5%252C7%252C4%255D%253B%250A%252F%252Fsuppose%252C%2520we%2520have%2520to%2520create%2520a%2520new%2520array%2520which%2520contains%2520all%2520the%2520elements%2520triple%2520of%2520their%2520value%2520in%2520arr.%250A%250A%252F***first%2520way****%252F%250A%252F%252Fconst%2520newArr%2520%253D%2520arr.map%28function%28num%29%257B%250A%252F%252F%2520%2520%2520%2520%2520return%2520num%2520%253D%2520num%2520*%25203%253B%250A%252F%252F%257D%29%250A%250A%252F***%2520best%2520way%2520and%2520mostly%2520used%2520***%252F%250Aconst%2520newArr%2520%253D%2520arr.map%28%28num%29%2520%253D%253E%2520%257B%250Areturn%2520num%2520%253D%2520num%2520*%25203%257D%29%250A%250Aconsole.log%28newArr%29%253B%2520%252F%252F%2520output%2520%253D%253E%2520%255B%25203%252C%25209%252C%252015%252C%252021%252C%252012%2520%255D%250A"
//   className='code'
//   sandbox="allow-scripts allow-same-origin">
// </iframe>
//         </div>



//             </div>
<>
<div className='big-upcoming-div' >
           <p className='upcoming' data-aos="flip-up"><ion-icon style={{paddingTop:30}} name="time"></ion-icon>Upcoming Events</p>
<div className='upcoming-div' data-aos="flip-up">
<div className='event-div'>
        
        <div id='willpower' data-aos="flip-up"><img src='./Images/willpower.jpg' className='will' alt='will harris' /></div>
        </div>
   
        <div className='event-info'  data-aos="flip-up">
            <b>About Event :</b><p style={{paddingBottom:16}}>Willpower ABCs of Success<br/>
            <b>Speaker</b> : Mr. Will Harris(USA)</p>
            <p><b>Date of Event</b> - 3rd October, Monday</p>
            <p><b>Time</b> - 10:30AM to 12:30PM IST</p>
            <p><b>Venue</b> - MBA Seminar Hall</p>
            <div className='buttons'>
            {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
            <a target="_blank" href="./Images/willflyer.jpeg"><button className='btninfo' id='overseasbtn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
            </div>
        </div>

        
    </div>

<div className='upcoming-div' data-aos="flip-up">
<div className='event-div'>
        
        <div className='event-img-div' id='overseas' data-aos="flip-up"><p>SESSION ON <br/>BLOCKCHAIN <br/>TECHNOLOGY</p></div>
        </div>
   
        <div className='event-info'  data-aos="flip-up">
        <b>About Event :</b><p style={{paddingBottom:16}}>Session on Blockchain Technology<br/>
            <b>Speakers</b> : <br/>Shrushti Patil<br></br>
            Prakash Koli</p>
            <p><b>Date of Event</b> - 3rd October, Monday</p>
            <p><b>Time</b> - 12:30PM IST</p>
            <p><b>Venue</b> - MBA Seminar Hall</p>
            <div className='buttons'>
            {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
            <a target="_blank" href="./Images/block.jpeg"><button className='btninfo' id='overseasbtn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
            </div>
        </div>

        
    </div>

<div className='upcoming-div' data-aos="flip-up">
<div className='event-div'>
        
<div id='willpower' data-aos="flip-up"><img src='./Images/vishwas.jpg' className='will' alt='Vishwas Badhe' /></div>
        </div>
   
        <div className='event-info'  data-aos="flip-up">
        <b>About Event :</b><p style={{paddingBottom:16}}>Opportunities for the Students<br/> in the industry on the <br/>basis of AI and ML<br/>
            <b>Speaker</b> : Prof.Vishwas Badhe(IIT Bombay)</p>
            <p><b>Date of Event</b> - 4th October, Tuesday</p>
            <p><b>Time</b> - 11:45AM IST</p>
            <p><b>Venue</b> - MBA Seminar Hall</p>
            <div className='buttons'>
            {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
            <a target="_blank" href="./Images/iit.jpeg"><button className='btninfo' id='overseasbtn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
            </div>
        </div>

        
    </div>
    </div>
</>
    )
}

export default Latest
