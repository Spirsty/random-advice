import { Card, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import './App.css';
import CasinoIcon from '@mui/icons-material/Casino';
import { Box, fontSize, height, maxHeight, width } from '@mui/system';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useState } from 'react';



function App() {
  const randQuote = async () => {
    const rand = await fetch('https://api.adviceslip.com/advice');
    return rand.json();

  }

  const [quote, setQuote] = useState("Click the dice to generate a quote !")
  const onClick = async () => {
    const quotes = randQuote();
    quotes.then((value) => { setQuote(value.slip.advice) })

  }
  return (
    <Box sx={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'hsl(218, 23%, 16%)',
    }}>
      <Card sx={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        maxWidth: { xs: '75%', sm: '450px' },
        backgroundColor: 'hsl(217, 19%, 24%)',
        borderRadius: '12px',
        p: 4,
        overflow: 'visible',
      }}>

        <Typography variant='body2' sx={{
          fontSize: '.7rem',
          fontFamily: 'Manrope',
          m: 3,
          mt: 2,
          color: 'hsl(150, 100%, 66%)',
          fontWeight: '500',
          letterSpacing: '4px'
        }}>ADVICE #117</Typography>
        <Typography sx={{
          fontFamily: 'Manrope',
          color: 'hsl(193, 38%, 86%)',
          textAlign: 'center',
          maxWidth: { xs: '80%', sm: '100%' },
          fontSize: '28px',
          fontWeight: '700',
          mb: 4
        }}
          variant="body2">&ldquo;{quote}&rdquo;</Typography>
        <div className='svg'>
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
        </div>
        <CardActions className='randomizer-box' sx={{
          position: 'relative',
          bottom: '-50px',
          backgroundColor: 'hsl(150, 100%, 66%)',
          borderRadius: '50%',
          p: 2,
          m: -1.5
        }}>
          <CasinoIcon className='randomizer' onClick={onClick} sx={{ fontSize: '2rem' }} />
        </CardActions>
      </Card>
    </Box >
  );
}

export default App;
