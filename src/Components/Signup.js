import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, dividerClasses } from '@mui/material';
import {makeStyles} from '@material-ui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link} from 'react-router-dom';
import './Signup.css';
import sapp from '../Assets/SapphireLogo.jpg';
import {Link , useHistory} from 'react-router-dom';
import {useState} from 'react';


export default function Signup() {
    const useStyles=makeStyles({
        text1:{
            color:'grey',
            textALign:'center'
        },
        card2:{
            height: '8vh',
            margintop: '2%'
        }
        
    })
    const classes=useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [file , setFile]=useState(null);
    const [error, setError]=useState('');
    const [ loading , setLoading]=useState('')
    const history =useHistory()

  return (
      <div className="signupWrapper">
          
          <div className="signupCard">
                <Card variant="outlined">
                  <div className="sapp-logo">
                        <img src={sapp} alt="" />
                   </div>
                        <CardContent>
                            <Typography className={classes.text1} variant="subtitle1">
                                        Signup to see photos and videos from your friends
                            </Typography>
                            {true&&<Alert severity="error">This is an error alert — check it out!</Alert>}
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin ="dense" size="small" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin ="dense" size="small" />
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin ="dense" size="small" />
                            <Button size="small" color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon />} component="label">
                              Upload Profile Image
                              <input type="file" accept="image/*" hidden />
                            </Button>
                        </CardContent>
                   
                        <CardActions>
                            <Button color="primary" fullWidth={true} variant="contained">
                              SignUp
                           </Button>
                       </CardActions>
                       <CardContent>
                            <Typography className={classes.text1} variant="subtitle1">
                                        By signing up , you agree to our Terms , Data Policy and Cookies Policy .
                            </Typography>
                           
                        </CardContent>
                </Card>
                <Card variant="outlined" className={classes.card2}>
                <CardContent>
                            <Typography className={classes.text1} variant="subtitle1">
                                             Having an account? <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
                            </Typography>
                           
                        </CardContent>
                </Card>
         </div>
      </div>


   
  );
}