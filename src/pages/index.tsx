import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "2rem",
  backgroundColor: "#f5f5f5",
});

const StyledCard = styled(Card)({
  maxWidth: 1000,
  width: "100%",
  marginTop: "2rem",
  padding: "2rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  backgroundColor: "#ffffff",
});

export default function Home() {
  return (
    <StyledContainer maxWidth="lg" sx={{ mt: 15, mb: 10 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "2rem",
              color: "#2C3E50",
            }}
          >
            Diego Napolitano
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} mb={10}>
          <StyledCard sx={{ maxWidth: "100%" }}>
            <Typography
              variant="h4"
              sx={{ textAlign: "left", marginBottom: "1rem" }}
            >
              Hello! I am Diego Napolitano, a 21-year-old in my final year of
              university college with a specialization in industrial IT. With a
              strong passion for artificial intelligence, Industry 4.0,
              automation, and programming, I am eager to showcase my skills and
              projects.
              <br />
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>
              Here, you will find examples of my work that showcase my
              dedication to innovation, problem-solving, and the application of
              technologies to real-world challenges.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/Diego_Napolitano_CV.pdf"
              sx={{ display: "flex", justifyContent: "center" }}
              download
            >
              Download CV
            </Button>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center", marginTop: "2rem" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "2rem",
              color: "#2C3E50",
            }}
          >
            Internship
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: "1rem",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            I am currently doing a 15-week internship at Tpcontrol, a company
            specialising in automation. I will be working on the development of
            a library of templates, dashboards and a deployment methodology
            called Zabbix, focusing on the monitoring of industrial and IT
            equipment. This project will involve defining the methodology and
            architecture, comparing Docker and bare-metal setups, and
            configuring Zabbix, including database selection and agent
            installation. I will also configure SNMP in industrial equipment and
            create Zabbix templates with items, triggers and graphs. I will also
            develop dynamic dashboards, implement security enhancements and
            manage the deployment process.
          </Typography>
        </Grid>
        <Grid item xs={12} mt={10}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "2rem",
              color: "#2C3E50",
            }}
          >
            Skills
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <StyledCard sx={{ height: "100%" }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={4}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          width: "100%",
                          marginBottom: "1rem",
                          objectFit: "contain",
                        }}
                        alt="Java Programming"
                        src="java-logo.png"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h5" gutterBottom textAlign="center">
                        Java
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        textAlign="justify"
                      >
                        Throughout my year as a student at HELHa, I have gained
                        significant experience with this language, as it is the
                        first object-oriented language I have worked with. I am
                        confident that with more practice I will become even
                        more comfortable with this programming language.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard sx={{ height: "100%" }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={4}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          width: "60%",
                          marginBottom: "1rem",
                          objectFit: "contain",
                        }}
                        alt="Python Programming"
                        src="python-logo.png"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h5" gutterBottom textAlign="center">
                        Python
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        textAlign="justify"
                      >
                        This is the most recent language I learnt at school, so
                        I have less experience with it. However, this does not
                        mean I cannot work with it. In fact, as it is a
                        straightforward programming language and I have a solid
                        foundation in programming, developing and understanding
                        code comes naturally to me.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard sx={{ height: "100%" }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={4}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          width: "80%",
                          marginBottom: "1rem",
                          objectFit: "contain",
                        }}
                        alt="C Programming"
                        src="logo-c.png"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h5" gutterBottom textAlign="center">
                        C Language
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        textAlign="justify"
                      >
                        Learning the basics of programming started with the C
                        language, which was an essential step in understanding
                        and mastering it. I discovered how to manage code with
                        bits and bytes and understood the risks of using the
                        computer’s memory to store variable data. Overall, I
                        would say that I am fairly skilled in the C language,
                        but there is always room for improvement.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard sx={{ height: "100%" }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={4}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          width: "80%",
                          marginBottom: "1rem",
                          objectFit: "contain",
                        }}
                        alt="React Programming"
                        src="react-logo-png-transparent.png"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h5" gutterBottom textAlign="center">
                        Web development
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        textAlign="justify"
                      >
                        From secondary school to University College, I have
                        learnt how to develop websites using various frameworks
                        and libraries, such as Next.js, React, Bootstrap, and
                        T3-App. I have also gained experience in JavaScript,
                        HTML, and CSS, all of which are essential for creating
                        the perfect website.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
