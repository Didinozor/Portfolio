import { Box, Card, CardContent, Container, Typography } from "@mui/material";
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
  maxWidth: 1200,
  width: "100%",
  marginTop: "2rem",
  padding: "2rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  backgroundColor: "#ffffff",
});

export default function Education() {
  return (
    <StyledContainer maxWidth="lg" sx={{ mt: 10 }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#2C3E50",
        }}
      >
        EDUCATION
      </Typography>

      {/* Primary School Section */}
      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            Primary School: École de l&apos;yser
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/yser.jpg"
                alt="Second-year web development project"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  float: "left",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                mt={1}
              >
                Figure 1 - École de l&apos;yser
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                During my primary school years, I was an average child, no
                different from the other children, except for my enjoyment of
                going to school. I had a strong interest in attending school
                because of the environment and the people I could meet. However,
                it was not until the fifth year of primary school that I started
                to develop an interest in science. This interest grew even more
                during my final year, and I knew what I wanted to focus on when
                I moved to secondary school.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      {/* Secondary School Section - 1st to 3rd grade */}
      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            Secondary School: College Saint-Michel du Chapois (1st to 3rd grade)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/saintmich.jpg"
                alt="Second-year web development project"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  float: "left",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                mt={1}
              >
                Figure 2 - College Saint-Michel du Chapois
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                In the early years of secondary school, I believed I was on the
                right path, but then I realised I was not. My interest in
                science did not grow, and I started to hate school. The reason
                was that the teachers and other students were unkind to me, and
                I felt that school was not for me. However, the science course
                also included a bit of computer science, and I really enjoyed it
                because, in my free time, I had developed a strong interest in
                computers and programming, watching several videos to understand
                how they work. A new opportunity opened for me, and I knew I had
                to change schools if I wanted to pursue this new passion.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      {/* Secondary School Section - 4th to 6th grade */}
      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            Secondary School: Institut Saint-André Charleroi (4th to 6th grade)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/andre.jpg"
                alt="Second-year web development project"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  float: "left",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                mt={1}
              >
                Figure 3 - Institut Saint-André Charleroi
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                It was at this school that I truly started learning about
                programming and web development. The courses were much more
                interesting, and I regained my motivation to attend school. I
                really enjoyed the new environment around me! I learnt a lot
                about web development, as it was the main course I followed, but
                I also studied programming in Python and performing analysis,
                which is very important in programming.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      {/* Helha */}
      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            University College: Haute École Louvain en Hainaut
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/helhacharleroi.jpeg"
                alt="Second-year web development project"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  float: "left",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                mt={1}
              >
                Figure 4 - Haute École Louvain en Hainaut
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                I am currently in my final year of university college, and I can
                confidently say that I have found my path. I truly enjoy what I
                am learning, especially as I continue to discover more about
                programming, automation, and other related topics! It is here
                that I have gained all the knowledge I currently have. I would
                say I am a fairly good student, as I have earned all my credits
                and, so far, have never failed a year. I have also gained a lot
                of experience in teamwork, which is essential in the industry.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      {/* Certifications */}
      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            My certifications
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                component="img"
                src="/certif1.png"
                alt="Instrumentation and regulation"
                sx={{
                  width: "75%",
                  borderRadius: "8px",
                  marginBottom: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                mt={1}
              >
                Figure 5 - Instrumentation and regulation
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                component="img"
                src="/certif2.png"
                alt="Schneider Electric network management"
                sx={{
                  width: "75%",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                mt={1}
              >
                Figure 6 - Schneider Electric network management
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );
}
