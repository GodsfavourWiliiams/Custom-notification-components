import './App.css';
import Button from './component/button/button';
import Toast from './component/toast/Toast';
import { useState } from 'react';






const BUTTON_PROPS = [
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success'
  },
  {
    id: 2,
    type: 'danger',
    className: 'danger',
    label: 'Danger'
  },
  {
    id: 3,
    type: 'info',
    className: 'info',
    label: 'Info'
  },
  {
    id: 4,
    type: 'warning',
    className: 'warning',
    label: 'Warning'
  },
];


function App() {
  const [list, setList] = useState([]);
  const [position, setPosition] = useState();
  const [description, setDescription] = useState("");


  const selectPosition = (event) => {
    setPosition(event.target.value);
    setList([]);
}


const showToast = (type) => {
  let toastProperties = null;
  
  const id = Math.floor((Math.random() * 100) + 1);

  

  switch(type) {
    case 'success':
        toastProperties = {
            id,
            description: description,
            BColor: '#07bc0c',
            icon: ""
        }
        break;
    case 'danger':
        toastProperties = {
            id,
            description: description,
            BColor: '#e74c3c',
            icon: ""
        }
        break;
    case 'info':
        toastProperties = {
            id,
            description: description,
            BColor: '#3498db',
            icon: ""
        }
        break;
    case 'warning':
        toastProperties = {
            id: 4,
            description: description,
            BColor: '#f1c40f',
            icon: ""
        }
        break;
    default:
        setList([]);
}
setList([...list, toastProperties]);
}


  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-3">
      <Toast
       toastList={list}
       position={position}
       />

      <p className='text-3xl font-bold'>Williams Notification Component</p>
      <div className="flex flex-col items-center justify-center my-10">
        <div className="flex gap-3">
          {
              BUTTON_PROPS.map(e => 
                  <Button 
                      key={e.id}
                      className={e.className}
                      label={e.label}
                      handleClick={() => showToast(e.type)}
                  />
              )
          }
          </div>
         <div className="my-4 ">
           <input type="text" 
           onChange={(e) => setDescription(e.target.value)}
           value={description} className="bg-indigo-50 outline-none px-3 py-2 rounded-lg " />
         </div>
          <div className="select">
              <select
                  name="position"
                  value={position}
                  onChange={selectPosition}
                  className="appearance-none w-full bg-purple-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-2"
              >
                  <option>Select Position</option>
                  <option value="top-center">Top-Center</option>
                  <option value="bottom-center">Bottom-Center</option>
                  <option value="top-right">Top Right</option>
                  <option value="top-left">Top Left</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="bottom-right">Bottom Right</option>
              </select>
          </div>
      </div>
    </div>
  );
}

export default App;

