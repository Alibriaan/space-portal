import { Card, CardContent, Container, FormControl, MenuItem, Select, SelectChangeEvent, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { ProjectMember, TechPortProjectListElement, TechPortProjectResponse } from "../../interfaces/techport-response.interface";
import { getProject, getProjects } from "../../services/http/nasa/techport";
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import router, { RouterPages } from "../../router";

function MemberTable(props: { members: ProjectMember[]}) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Primary Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {
            props?.members?.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{ member.firstName }</TableCell>
                <TableCell>{ member.lastName }</TableCell>
                <TableCell>{ member.fullName }</TableCell>
                <TableCell>{ member.primaryEmail }</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function ProjectDescription(props: { projectDescription: TechPortProjectResponse}) {
  return (
    <Card elevation={5}>
      <CardContent>
        <Stack spacing={2}>
          <Container maxWidth={false}>
            <Typography variant="h3">
              {
                props?.projectDescription?.project?.title
              }
            </Typography>
          </Container>
          <Container maxWidth={false}>
            <Typography variant="h5">
              {
                `Start Date: ${props?.projectDescription?.project?.startDateString || ''}`
              }
              <br />
              {
                `End Date: ${props?.projectDescription?.project?.endDateString || ''}`
              }
              <br />
              {
                `Status: ${props?.projectDescription?.project?.statusDescription}`
              }
            </Typography>
          </Container>
          <Container maxWidth={false}>
            <Typography variant="body1" sx={{
                maxWidth: '100%',
                overflow: 'hidden',
              }}
              dangerouslySetInnerHTML={{ __html: props?.projectDescription?.project?.description || ''}}
            >
            </Typography>
          </Container>
          <Container maxWidth={false}>
            <Typography>
              Principal Investigators
            </Typography>
            <MemberTable members={props.projectDescription.project.principalInvestigators}></MemberTable>    
          </Container>
          <Container maxWidth={false}>
            <Typography>
              Program Directors
            </Typography>
            <MemberTable members={props.projectDescription.project.programDirectors}></MemberTable>
          </Container>
          <Container maxWidth={false}>
            <Typography>
              Program Executives
            </Typography>
            <MemberTable members={props.projectDescription.project.programExecutives}></MemberTable>
          </Container>
          <Container maxWidth={false}>
            <Typography>
              Program Managers
            </Typography>
            <MemberTable members={props.projectDescription.project.programManagers || [] }></MemberTable>
          </Container>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default function NasaTechPortPage() {
  const [techPortProjects, setTechPortProjects] = useState<TechPortProjectListElement[]>();
  const [selectedProjects, setSelectedProjects] = useState<string>('');
  const [projectDescription, setProjectDescription] = useState<TechPortProjectResponse>();

  useEffect(() => {
    getProjects({ offset: 0, limit: 10 })
      .then((data) => {
        setTechPortProjects(data);
      });
  }, []);

  const fetchProjectDescription = (eventId: string) =>  {
    getProject(eventId)
      .then((response) => {
        setProjectDescription(response.data);
      })
  }

  const handleProjectSelect = (event: SelectChangeEvent) => {
    setSelectedProjects(event.target.value);

    fetchProjectDescription(event.target.value);
  };

  return (
    <PageContainer
      maxWidth={false}
      sx={{
        margin: '0 auto',
        padding: '10px',
      }}
      data-testid={router[RouterPages.nasaTechport].testId}
    >
      <Stack spacing={2}>
        <FormControl sx={{
          margin: '25px',
        }}>
          <Typography variant='h4'>Project Id</Typography>
          <Select labelId="project-select-label" onChange={handleProjectSelect}>
            {
              techPortProjects?.map((project, index) => (
                <MenuItem key={index} value={project.projectId}>{project.projectId}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        {
          projectDescription ? <ProjectDescription projectDescription={projectDescription}  /> : <></>
        }
      </Stack>
    </PageContainer>
  );
}

