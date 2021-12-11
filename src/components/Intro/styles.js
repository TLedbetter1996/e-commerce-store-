 import { makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    "slider": {
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    },

    "image": {
    width: '10px',
    height: '60px',
    borderRadius: '100px',
   


    },

    "rightArrow": {
        position: 'absolute',
        top: '50px',
        right: '32px',
        fontSize: '3rem',
        color: '000',
        zIndex: 10,
        cursor: 'pointer',
        userSelect: 'none',
        transform: 'translate(-50%, -50%)'
    },

    "leftArrow":{
    position: 'absolute',
    top: '50px',
    left: '32px',
    fontSize: '3rem',
    color: 'black',
    zIndex: 10,
    cursor: 'pointer',
    userSelect: 'none',
    transform: 'translate(-50%, -50%)'
    },

    "slide":{
    opacity:"0",
    transitionDuration:"1s ease"
    },

    "slide_active":{
    opacity:"1",
    transitionDuration:"1s",
    transform:"scale(1.08)"
    }

    
  })); 