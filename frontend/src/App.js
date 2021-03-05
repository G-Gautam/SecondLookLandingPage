import './App.css';
import lockImage from './lock.png'
import realTimeImage from './realtime.png'
import searchImage from './search.png'
import warningImage from './warning.png'
import firebase from 'firebase';
import "firebase/performance";
import { useEffect, useState } from 'react';


function onClick(category, message, setSignup, setLastEmail, emailRef) {
    let res = message.email.split("@");
    if (res.length !== 2) {
        return;
    }
    emailRef.push({key: Date.now(), email: message.email});

    setSignup(true);
    setLastEmail(message.email)
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var app = firebase.initializeApp({
    apiKey: "AIzaSyDZkkA6kBqJhFawZkgWhKrT8eowRoYb-QU",
    authDomain: "secondlook-97e26.firebaseapp.com",
    projectId: "secondlook-97e26",
    storageBucket: "secondlook-97e26.appspot.com",
    messagingSenderId: "368268452667",
    appId: "1:368268452667:web:5f7f2c8f8da93f7a9a0d1e",
    measurementId: "G-515WV6ZHP0"
})

const analytics = firebase.analytics();

function App() {
    const [email, setEmail] = useState('');
    const [lastEmail, setLastEmail] = useState('blah');
    const [signup, setSignup] = useState(false);

    var emailRef = app.database().ref("/signups");

    let signupNotification;

    if (signup) {
        signupNotification = <h3 className='notification'>You have signed up!</h3>
    }

    return (
        <div className="App">
            <div className="container" id='main'>
                <h1 className='light-title'>SECOND</h1>
                <h1 className='bold-title'>LOOK</h1>
                <h3 className='slogan'>A medicare insurance assistant in your pocket <br></br>
                 to guarantee the best health care for you!</h3>

                <div className='input-container'>
                    <div className='input-sub-container'>
                        <input type='email' className='input' name='email' placeholder='name@example.com' value={email} onChange={(value) => { setEmail(value.target.value) }}></input>
                        <button disabled={lastEmail === email || email === '' || !validateEmail(email)} className='button' onClick={() => { onClick('SIGNUP', { email }, setSignup, setLastEmail, emailRef) }}> Sign Up </button>
                    </div>
                    {signupNotification}
                </div>
            </div>
            <div className="container" id='second'>
                <div className='feature-container' id='o'>
                    <div className='feature-subcontainer'>
                        <h2 className='feature-title'>Protected Data</h2>
                        <h3 className='feature-description'>Two factor authentication and end-to-end encryption to secure all data.</h3>
                    </div>
                    <span className="circle"><img className="circle-image" src={lockImage}></img></span>
                </div>
                <div className='feature-container' id='s'>
                    <div className='feature-subcontainer'>
                        <h2 className='feature-title'>Real Time Notifications</h2>
                        <h3 className='feature-description'>Always stay updated to any policy updates, promotions, and charges made to your insurance.</h3>
                    </div>
                    <span className="circle"><img className="circle-image" src={realTimeImage}></img></span>
                </div>
                <div className='feature-container' id='t'>
                    <div className='feature-subcontainer'>
                        <h2 className='feature-title'>Automated Insurance Advisor</h2>
                        <h3 className='feature-description'>Alternative recommendations and coverage gap identification to make sure you never spend out of pocket.</h3>
                    </div>
                    <span className="circle"><img className="circle-image" src={searchImage}></img></span>
                </div>
                <div className='feature-container' id='f'>
                    <div className='feature-subcontainer'>
                        <h2 className='feature-title'>AI Invoice Anomaly Detector</h2>
                        <h3 className='feature-description'>Each invoice is checked for errors and simplified for a quick read. Never again wonder about your charges.</h3>
                    </div>
                    <span className="circle"><img className="circle-image" id='warning' src={warningImage}></img></span>
                </div>
            </div>
        </div>
    );
}

export default App;