import {TfiClose} from 'react-icons/tfi'

function Dialog(props) {
    const { children, handleCloseDialog } = props;
  
    const CloseIcon = () => {
      const handleMouseEnter = (event) => {
        event.target.children[0].style.transform = 'rotate(360deg)';
      };
      
      const handleMouseLeave = (event) => {
        event.target.children[0].style.transform = 'rotate(0deg)';
      };
  
      return (
        <span onClick={handleCloseDialog} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute -top-4 -right-4 bg-blue px-5 py-4 rounded-full cursor-pointer"
       >
          <button
            
            className={`focus:outline-none focus:border-none  inline-flex items-center transition delay-300 duration-300 text-white `}
          >
            
            <TfiClose size={20}/>
          </button>
        </span>
      );
    };
  
    return (

      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 ">
        
        <div className="bg-white p-6 rounded-lg relative flex flex-col items-center ">
          {CloseIcon()}
          {children}
        </div>
      </div>
    );
  }
  
  export default Dialog;