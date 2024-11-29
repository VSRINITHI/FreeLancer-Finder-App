import * as React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import HomeImage from "../assets/homepage1.jpg";
import HomeImage1 from "../assets/homepage2.jpg";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import papimg1 from "../assets/paper1.jpg";
import papimg2 from "../assets/paper2.jpg";
import papimg3 from "../assets/paper3.jpg";
import papimg4 from "../assets/paper4.jpg";
import papimg5 from "../assets/paper5.jpg";
import papimg6 from "../assets/paper6.jpg";
import papimg7 from "../assets/paper7.jpg";
import papimg8 from "../assets/paper8.jpg";
const fontFamilyStyle = {
  fontFamily: 'YourFontFamily',
  color: 'black',
};

function Home() {
  return (
    <div>
      {/* <br/><br/><br/>
      <div style={{ backgroundColor: '#7CB9E8' }}>
        <Typography variant="h3" sx={fontFamilyStyle} align="center">
          <b>WELCOME TO RECU-FREE..</b>
        </Typography>
        <br />
        <div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" sx={fontFamilyStyle}>
                <ul style={{ listStyleType: 'square' }}>
                  <b>The best part? Everything.</b><br />
                  <li>
                    Stick to your budget<br />
                    Find the right service for every price point. No hourly rates, just project-based pricing.<br />
                  </li>
                  <li>
                    Get quality work done quickly<br />
                    Hand your project over to a talented freelancer in minutes, get long-lasting results.<br />
                  </li>
                  <li>
                    Count on 24/7 support<br />
                    Our round-the-clock support team is available to help anytime, anywhere.<br />
                  </li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img src={HomeImage} alt="Your Alt Text" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </Grid>
        </div>
      </div> */}
      <br/><br/><br/><br/>
      <div style={{ backgroundColor: '#B9D9EB' }}>
        <Grid container spacing={3}>
          {/* Left side: Image */}
          <Grid item xs={6}>
            {/* Replace 'path/to/your/image.jpg' with the actual path to your image */}
            <img src={HomeImage1} alt="Your Alt Text" style={{ width: '100%', height: 'auto' }} />
          </Grid>

          {/* Right side: Text */}
          <Grid item xs={6}>
            <Typography variant="h2" sx={fontFamilyStyle}>
              Find Genuine Remote Jobs at Companies That Get It
              <br />
              <button style={{ backgroundColor: '#1e88e5', width: '80%', padding: '10px', border: 'none', borderRadius: '5px' }}>
                <Link to='/Login'>
                EXPLORE MORE
                </Link>
              </button>
            </Typography>
          </Grid>
         
        </Grid>
      </div>
      <div style={{ textAlign: 'center', backgroundColor: '#B9D9EB', marginTop: '-40px' }}>        
      <h3 >TOP SERVICES</h3>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
              position: 'relative', // Position relative for absolute positioning of content
              overflow: 'hidden', // Hide content overflow on hover
              transition: 'transform 0.3s ease', // Add a smooth transition effect
              '&:hover': {
                transform: 'scale(1.1)', // Scale up the Paper on hover
              },
            },
          }}
        >
          <Paper elevation={3}>
  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <img src={papimg1} alt="Recruiting Job 1" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
    <div style={{ padding: '5px', textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={fontFamilyStyle}>
        Content Writing
      </Typography>
    </div>
  </div>
</Paper>
          <Paper elevation={3}>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <img src={papimg2} alt="Recruiting Job 1" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
    <div style={{ padding: '5px', textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={fontFamilyStyle}>
        Logo Design
      </Typography>
    </div>
  </div>
          </Paper>
          <Paper elevation={3}>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <img src={papimg3} alt="Recruiting Job 1" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
    <div style={{ padding: '5px', textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={fontFamilyStyle}>
        FullStack
      </Typography>
    </div>
  </div>
          </Paper>
          <Paper elevation={3}>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <img src={papimg4} alt="Recruiting Job 1" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
    <div style={{ padding: '5px', textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={fontFamilyStyle}>
        AI
      </Typography>
    </div>
  </div>
          </Paper>
          <Paper elevation={3}>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <img src={papimg5} alt="Recruiting Job 1" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
    <div style={{ padding: '5px', textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={fontFamilyStyle}>
        DataScience
      </Typography>
    </div>
  </div>
          </Paper>
          <Paper elevation={3}>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <img src={papimg6} alt="Recruiting Job 1" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
    <div style={{ padding: '5px', textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={fontFamilyStyle}>
        AR/VR
      </Typography>
    </div>
  </div>
          </Paper>
          <Paper elevation={3}>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <img src={papimg7} alt="Recruiting Job 1" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
    <div style={{ padding: '5px', textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={fontFamilyStyle}>
        Digital Marketing
      </Typography>
    </div>
  </div>
          </Paper>
          <Paper elevation={3}>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <img src={papimg8} alt="Recruiting Job 1" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
    <div style={{ padding: '5px', textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={fontFamilyStyle}>
        VideoGraphy
      </Typography>
    </div>
  </div>
          </Paper>
        </Box>
        <br /><br /><br />
      </div>
      
    </div>
  );
}

export default Home;
