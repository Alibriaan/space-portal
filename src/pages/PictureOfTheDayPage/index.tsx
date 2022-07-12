import { Card, CardContent, Container, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import router, { RouterPages } from "../../router";
import { APODGetPictureRequestResponse, getPictureOfTheDay } from "../../services/http/nasa/apod";

export default function PictureOfTheDayPage() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState<APODGetPictureRequestResponse>();

  useEffect(() => {
    setTimeout(() => {
      getPictureOfTheDay()
        .then((response) => {
          setPictureOfTheDay(response.data);
        })
    }, 2000);
  }, [])


  const getPicture = () => {
    return pictureOfTheDay?.url ? <img data-testid={`${router[RouterPages.pictureOfTheDay].testId}-image`} src={pictureOfTheDay?.url} alt='picture of ther day' /> : undefined;
  }

  return (
    <Container maxWidth={false} data-testid={router[RouterPages.pictureOfTheDay].testId}>
      <Card 
        sx={{
          maxWidth: '768px',
          margin: '10px auto',
        }}
      >
        <CardContent>
          {
            pictureOfTheDay
              ? 
                <Stack spacing={2}>
                  {
                    getPicture()
                  }

                  <Typography variant='h4' data-testid={`${router[RouterPages.pictureOfTheDay].testId}-title`}>
                    {
                      pictureOfTheDay?.title
                    }
                  </Typography>
                  <Typography variant='body1' data-testid={`${router[RouterPages.pictureOfTheDay].testId}-description`}>
                    {
                      pictureOfTheDay?.explanation
                    }
                  </Typography>
                  <Typography variant='body2' data-testid={`${router[RouterPages.pictureOfTheDay].testId}-copyright`}>
                    {
                      `Copyright ${pictureOfTheDay?.copyright} ${pictureOfTheDay?.date}`
                    }
                  </Typography>
                </Stack>
              : 
                <Stack spacing={2}>
                  <Skeleton animation="wave" variant="rectangular" width='100%' height={200} />
                  <Skeleton animation="wave" variant="rectangular" width='100%' height={80} />
                  <Skeleton animation="wave" variant="rectangular" width='100%' height={350} />
                  <Skeleton animation="wave" variant="rectangular" width='100%' height={10} />
                </Stack>

          }
        </CardContent>
      </Card>
    </Container>
  );
}