import * as React from 'react';
import Box from '@mui/material/Box';
import img from "./satrt.jpg"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Link from '@mui/material/Link';

export default function Acctivation (){
    return(
      <>
          <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        // borderRadius: '15px',
        // boxShadow: 1,
        // fontWeight: 'bold',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 625,
          width: 800,
          maxHeight: { xs: 200, md: 800 },
          maxWidth: { xs: 600, md: 900 },
        }}
        alt=""
        src={img}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center' },
          m: 11,
          minWidth: { md: 350 },
        }}
      >
          <Box>  
          <Typography variant="h6" style={{color: '#1976d2', fontWeight: 'bold' , marginBottom: '5%', fontFamily: 'Arial Black' }}>
              Activate your account 
            </Typography>

          </Box>
          <Box> 
          <TextField id="filled-basic" label="Enter your code" variant="filled" size="small"  style={{ marginBottom: '5%' , width:"300px"}}/>
          </Box>
           <Box> 
          <Button size="large" variant="contained" style={{ fontWeight: 'bold' , marginBottom: '2%' , width:"300px"}} endIcon={<SendIcon />} >
              Activate account 
          </Button>
          </Box>
          {/* <Box> */}
          <Typography variant="p" style={{color: '#C0C0C0' }} >
              Haven’t account ? <Box variant="div" display="inline" style={{color: '#1976d2' }}> <Link href="/Inscription" underline="none"> Click Here
             </Link>
            </Box>    
            </Typography>  
  

          {/* </Box> */}
      </Box>
    </Box>


      </>      
    )
}
