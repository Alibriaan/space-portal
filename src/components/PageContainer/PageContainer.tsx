import { ContainerProps } from "@mui/material";
import { Container, styled } from "@mui/system";

const PageContainer = styled(Container)<ContainerProps>((props) => ({
  '&': {
    width: '100vw',
    minHeight: '100vh',
    margin: '0',
    padding: '0',
  }
}));

export default PageContainer;
