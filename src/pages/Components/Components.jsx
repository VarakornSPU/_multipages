import Counter from '../../components/Counter/Counter';
import Timer from '../../components/Timer/Timer';
import Add from '../../components/Add/Add';
import Temperatures from '../../components/Temperatures/Temperatures';
//import styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './Components.css'

function Components() {

  return (
    <div className='components-container'>
      
      <div className="title"><h1>React COMPONENTS</h1></div>
      <div className="header">
      <div className="left-column">
      <div className="counter-app"><Counter /></div>
      <div className="timer-app"><Timer />
      </div> </div>
      <div className="add-app"><Add aValue={10} bValue={20}/></div>
      </div>
      <div className="tepmeratures-app"><Temperatures /></div>
      <div className="Sname"><h2>วรากร มาตุเรศ รหัส 66049472</h2></div>
      </div>
      
    
  )
}

export default Components
