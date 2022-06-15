import { useState, useEffect  } from 'react';
import './toast.css';
import PropTypes from 'prop-types';



const Toast = (props) => {
  const { toastList, position } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
      setList(toastList);
  }, [toastList, list]);

  const deleteToast = id => {
    const index = list.findIndex(e => e.id === id);
    list.splice(index, 1);

    const toastListItem = toastList.findIndex(e => e.id === id);
    toastList.splice(toastListItem, 0);

    setList([...list]);
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      if ( toastList.length && list.length) {
        deleteToast(toastList[0].id);
    }
    }, 3000);
    return () => {
      clearInterval(interval);
  }
  });

  return (
    <>
    <div className={`notification-container ${position}`}>
        {
            list.map((toast, index) =>     
              <div 
                  key={index}
                  className={`shadow my-2 z-50 flex bg-white max-w-sm justify-center flex-row px-2 py-2 gap-2 items-center rounded-lg shadow ${position} `}
              >
                  <span className="flex-shrink-0 inline-flex item-center justify-center leading-none rounded-full ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={toast.BColor} className="h-8 w-8">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                    </span>

                      <div className="flex-1 p-2 truncate">
                        <p className="text-sm truncate">{toast.description}</p>
                      </div>

                  <button title="Close snackbar" onClick={() => deleteToast(toast.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-4 h-4 my-1">
                      <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                    </svg>
                  </button>
              </div>
            )
        }
    </div>
  </>
  )
}

Toast.defaultProps = {
  position: 'top-left'
}

Toast.propTypes = {
  toastList: PropTypes.array.isRequired,
  position: PropTypes.string,
}

export default Toast