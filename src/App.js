import './App.css';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import {RiSettingsLine} from 'react-icons/ri'
import {VscKey} from 'react-icons/vsc'
import {PiCubeFocusThin} from 'react-icons/pi'
import {RxAvatar} from 'react-icons/rx'
import {GiWallet} from 'react-icons/gi'
import {LuBadgePercent} from 'react-icons/lu'
import {MdOutlineLiveHelp} from 'react-icons/md'
function App() {
  return (
    <div className='App'>
      <div className='sidebar'>
<div className='Heading'><RiSettingsLine/>Dashboard</div>
<div className='routes'>
  <div className='rote'><VscKey/>Dashboard</div>
  <div className='rote'><PiCubeFocusThin/>Products</div>
  <div className='rote'><RxAvatar/>Customer</div>
  <div className='rote'><GiWallet/>Income</div>
  <div className='rote'><LuBadgePercent/>Promote</div>
  <div className='rote'><MdOutlineLiveHelp/>Help</div>
</div>
      </div>
<Routes>
<Route path='/' element={<Dashboard/>}/>
</Routes>
    </div>
    
  );
}

export default App;
