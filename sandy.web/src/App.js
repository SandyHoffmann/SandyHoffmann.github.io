import { Icon } from '@iconify/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className='App-header-icons'>
          <div><Icon icon="nimbus:whatsapp" width="24" height="24"/></div></div>
        <div className='App-header-title'><p><b>Sandy Hoffmann</b></p></div>
        <div className='App-header-icons'>
          <div>
        <Icon icon="nimbus:exclamation-triangle" width="24" height="24"/>
        </div>
        <div>
        <Icon icon="nimbus:close" width="24" height="24"/>
        </div>
        </div>
      </header>
      <div className='App-content'>
        <div className='content-header'>
          <div className='content-header-pages'>
            <div>
              <Icon icon="nimbus:home" width="24" height="24"/>
            </div>
            <div>
              <p>About Me</p>
            </div>
            <div>
              <p>My Projects</p>
            </div>
            <div>
              <p>Certificates</p>
            </div>
            <div>
              <p>Freelance - Contact Me</p>
            </div>
          </div>
          <div className='content-header-icons'>
            <div>
              <Icon icon="nimbus:search" width="24" height="24"/>
            </div>
            <div>
              <Icon icon="nimbus:question-circle" width="24" height="24"/>
            </div>
          </div>
        </div>
        <div className='content-body rainbow-bg'>
          <h1>Montando página</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
