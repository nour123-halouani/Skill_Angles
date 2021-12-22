import * as React from 'react';
import Grid from '@mui/material/Grid';
import img from "./satrt.jpg"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

export default function Inscription (){
    return(
      <>
    <Grid
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row', sm: 'column' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        // borderRadius: '15px',
        // GridShadow: 1,
        // fontWeight: 'bold',
      }}
    >
      <Grid
        component="img"
        sx={{
          height: "100vh",
          width: 800,
          maxHeight: { xs: 200, md: 800 },
          maxWidth: { xs: 600, md: 900 },
        }}
        alt=""
        src={img}
      />

      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center' },
          m: 11,
          minWidth: { md: 350 },
        }}
      >
          <Grid>
          <Typography variant="h6" style={{color: '#1976d2', fontWeight: 'bold' , marginBottom: '5%', fontFamily: 'Arial Black', textAlign:"center" }}>
            Sign up right Now! 
            </Typography>

          </Grid>
          <Container> 
          <TextField id="filled-basic" label="Enter your Full Name" variant="filled" size="small"  style={{ marginBottom: '5%' , width:"300px"}}/>
          </Container>
          <Grid> 
          <TextField id="filled-basic" label="Enter your Email" variant="filled" size="small"  style={{ marginBottom: '5%' , width:"300px"}}/>
          </Grid>
          <Grid> 
          <TextField id="filled-basic" label="Enter your Code" variant="filled" size="small"  style={{ marginBottom: '5%' , width:"300px"}}/>
          </Grid>
           <Grid>
          <Button size="large" variant="contained" style={{ fontWeight: 'bold' , marginBottom: '2%' , width:"300px"}} endIcon={<SendIcon />} >
              Sign up 
          </Button>
          </Grid>
          {/* <Grid> */}
          <Typography variant="p" style={{color: '#C0C0C0' , spancingRight:'20px' }} >
              Have you an account ? <Grid variant="div" display="inline"  style={{color: '#1976d2' }}> <Link href="/Acctivation" underline="none"> Click Here
             </Link>
            </Grid>    
            </Typography>  
  

          {/* </Grid> */}
      </Grid>
    </Grid>


      </>      
    )
}
