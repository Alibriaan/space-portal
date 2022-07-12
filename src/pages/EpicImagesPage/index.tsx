import { Button, Table, TableCell, TableHead, TableRow } from "@mui/material";
import { Container } from "@mui/system";
import moment from "moment";
import { useEffect, useState } from "react";
import { getAllDates, getImageUrlByDateAndId, getNaturalImages, NeowsNaturalImagesRequestResponse } from "../../services/http/nasa/epic-camera";
import Dialog from '@mui/material/Dialog';
import PositionedSkeleton from "../../components/PositionedSkeleton/PositionedSkeleton";
import router, {RouterPages} from "../../router";

export default function EpicImagesPage() {
  const tableHead = [
    '',
    'Caption',
    'Version',
    'Centroid Coordinates',
    'Discover J2000 Position ',
    'Lunar J2000 Position',
    'Sun J2000 Position ',
    'Attitude Quaternions ',
    'Date'
  ]

  const [naturalImagesConfiguration, setNaturalImagesConfiguration] = useState<NeowsNaturalImagesRequestResponse[]>();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    getAllDates();
    getNaturalImages()
      .then((response) => setNaturalImagesConfiguration(response.data));
      //.catch(/);
  }, []);


  const handleSelectImageClick = (value: NeowsNaturalImagesRequestResponse) => () => {
    const date = moment(value.date);


    setImageUrl(getImageUrlByDateAndId({
      year: date.format('YYYY'),
      month: date.format('MM'),
      day: date.format('DD'),
      imageId: value.image,
    }));
  
    setImageSelected(true)
  }

  const handleImageModalClose = () => {
    setImageSelected(false);
    setImageUrl('');
    setImageLoaded(false);
  }

  const handleImageLoad = () => {
    console.log('image loaded');
    setImageLoaded(true);
  }

  return (
  <Container maxWidth={false} data-testid={router[RouterPages.epic].testId}>
    <Table>
      <TableHead>
        <TableRow>
          {
            tableHead.map((head, index) => (
              <TableCell key={index}>
                    { head }
              </TableCell>
            ))
          }
        </TableRow>
      </TableHead>
      {
        naturalImagesConfiguration?.map((row: NeowsNaturalImagesRequestResponse, index) => (
          <TableRow hover key={index}>
            <TableCell>
              <Button onClick={handleSelectImageClick(row)}>Watch Image</Button>
            </TableCell>
            <TableCell> {row.caption} </TableCell>
            <TableCell> {row.version} </TableCell>
            <TableCell> {`lat: ${row.centroid_coordinates.lat} <br /> lon: ${row.centroid_coordinates.lon}`} </TableCell>
            <TableCell> {`x: ${row.dscovr_j2000_position.x} y: ${row.dscovr_j2000_position.y} z: ${row.dscovr_j2000_position.z}`} </TableCell>
            <TableCell> {`x: ${row.lunar_j2000_position.x} y: ${row.lunar_j2000_position.y} z: ${row.lunar_j2000_position.z}`} </TableCell>
            <TableCell> {`x: ${row.sun_j2000_position.x} y: ${row.sun_j2000_position.y} z: ${row.sun_j2000_position.z}`} </TableCell>
            <TableCell> {`q0: ${row.attitude_quaternions.q0} q1: ${row.attitude_quaternions.q1} q2: ${row.attitude_quaternions.q2} q3: ${row.attitude_quaternions.q3}`} </TableCell>
            <TableCell> {row.date} </TableCell>
          </TableRow>
        )) 
      }
    </Table>
    <Dialog
      open={imageSelected}
      onClose={handleImageModalClose}
    >
      {
        <>
          <img onLoad={handleImageLoad} src={imageUrl} alt='Earth Image' style={{opacity: imageLoaded ? 1 : 0 }} />
          {
            imageLoaded ? <></> : <PositionedSkeleton position='absolute' top='0' left='0' animation="wave" variant="rectangular" width='100%' height='100%' />
          }
        </>
        
      }
    </Dialog>

  </Container>
  );
}