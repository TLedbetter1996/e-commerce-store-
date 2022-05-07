import { makeStyles } from '@material-ui/core/styles';

//hooks 
export default makeStyles(() => ({
    root: {
        maxWidth: '100%',

    },
    media: {
        height: 0,
        paddingTop: '80%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'baseline'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: "white"
        
    },
}));

