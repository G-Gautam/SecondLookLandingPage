import './App.css';
import lockImage from './lock.png'
import realTimeImage from './realtime.png'
import searchImage from './search.png'
import warningImage from './warning.png'
import ReactGA from 'react-ga';
import { useState } from 'react';

function initializeReactGA() {
    ReactGA.initialize('UA-191469778-1')
    ReactGA.pageview('/')
}

function onClick(category, message, setSignup, setLastEmail) {
    let res = message.email.split("@");
    if (res.length !== 2) {
        return;
    }
    ReactGA.event({
        category: category,
        action: res[0],
        label: res[1]
    })
    setSignup(true);
    setLastEmail(message.email)
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function App() {
    const [email, setEmail] = useState('');
    const [lastEmail, setLastEmail] = useState('blah');
    const [signup, setSignup] = useState(false);
    initializeReactGA();

    let signupNotification;

    if(signup){
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
                    <input type='email' className='input' name='email' placeholder='name@example.com' value={email} onChange={(value) => { setEmail(value.target.value)}}></input>
                    <button disabled={lastEmail === email || email==='' || !validateEmail(email)} className='button' onClick={() => { onClick('SIGNUP', { email }, setSignup, setLastEmail)}}> Sign Up </button>
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