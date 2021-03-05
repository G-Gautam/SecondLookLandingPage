import './App.css';

function App() {
    return (
        <div className="App">
            <div className="container" id='main'>
                <h1 className='light-title'>SECOND</h1>
                <h1 className='bold-title'>LOOK</h1>
                <h3 className='slogan'>A medicare insurance assistant in your pocket <br></br>
                 to guarantee the best health care for you!</h3>

                <div className='input-container'>
                    <input type='email' className='input' name='email' placeholder='name@example.com'></input>
                    <button className='button'> Sign Up </button>
                </div>
            </div>
            <div className="container" id='second'>
                <div className='feature-container' id='o'>
                    <div className='feature-title-container'>
                        <h2 className='feature-title'>Protected Data</h2>
                    </div>
                    <span className="circle"></span>
                </div>
                <div className='feature-container' id='s'>
                    <div className='feature-title-container'>
                        <h2 className='feature-title'>Real Time Notifications</h2>
                    </div>
                    <span className="circle"></span>
                </div>
                <div className='feature-container' id='t'>
                    <div className='feature-title-container'>
                        <h2 className='feature-title'>Automated Insurance Advisor</h2>
                    </div>
                    <span className="circle"></span>
                </div>
                <div className='feature-container' id='f'>
                    <div className='feature-title-container'>
                        <h2 className='feature-title'>AI Invoice Anomaly Detector</h2>
                    </div>
                    <span className="circle"></span>
                </div>
            </div>
        </div>
    );
}

export default App;