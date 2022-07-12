import { Box, Card, CardActionArea, CardContent, CardProps, Grid, Stack, styled, Tooltip, Typography } from '@mui/material';
import { Container } from '@mui/system';
import router, { RouterPages } from '../../router';
import { useNavigate } from "react-router-dom";
import backgroundVideo from '../../assets/video/vecteezy_universe-filled-with-stars-abstract-nebula-or-galaxy-astronomy-conceptual-background_2018583.mp4';
import nasaLogo from '../../assets/img/NASA_logo.svg.png'

export default function MainPage() {
  const navigate = useNavigate();

  const goToPage = (route: string) => () => navigate(route);

  const routeWithoutMainPage = () => {
    return router.filter((route) => route.link !== '/');
  }

  return (
    <Container 
      className='main-page page backround'
      data-testid={router[RouterPages.mainPage].testId}
      maxWidth={false}
      sx={{
        overflow: 'hidden',
      }}
    >
      <video 
        data-testid='main-page-background-video'
        playsInline
        autoPlay
        muted
        loop
        style={{position: 'fixed', top: '0', left: '0', zIndex: '-1'}}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Stack 
        spacing={2}
        data-testid='main-page-content-stack'
      >
        <Box 
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <img 
            src={nasaLogo}
            width='250px'
            alt='Nasa' 
          />
          {/* <Typography variant='h2' textAlign='center' color='white'>Choose Departament</Typography> */}
        </Box>
        <Stack spacing={4}>
          {
            routeWithoutMainPage().map((route, index) => (
                <Box 
                  key={index}
                  onClick={goToPage(route.link)}
                  data-testid={`main-page-route-link`}
                  data-test-link={`${route.link}`}
                >
                  <CardActionArea sx={{ height: '100%' }}>
                      <CardContent 
                        sx={{ 
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Tooltip title={route.description} arrow>
                          <Typography variant='h4' textAlign='center' color='white'>
                            {
                              route.name
                            }
                          </Typography>
                        </Tooltip>
                      </CardContent>
                  </CardActionArea>
                </Box>
            ))
          }
        </Stack>
      </Stack>
    </Container>
  );
}