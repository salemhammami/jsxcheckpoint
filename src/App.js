import './App.css';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Address';

function App() {
  return (
    <div className="App">
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
