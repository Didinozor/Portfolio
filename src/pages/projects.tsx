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
  maxWidth: 1400,
  width: "100%",
  marginTop: "2rem",
  padding: "2rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  backgroundColor: "#ffffff",
});

export default function Projects() {
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
        My Projects
      </Typography>
      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            First-year multidisciplinary project
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/projet_1.png"
                alt="First-year multidisciplinary project"
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
                Figure 1 - First-year multidisciplinary project
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                First of all, it was the first group project that I have ever
                had to work on, and it was a really challenging. As it was my
                first year at a university college, I did not have much
                knowledge about electronics and programming in C, and I had to
                face a big problem. The project was to develop a program in C
                language that had to be connected to a circuit using a
                communication card. The goal of the project was to count how
                many times an object passed in front of a sensor, in this case a
                photoresistor, and to display this count on two 7-segment
                displays. Furthermore, the counter value had to range from 0 to
                19, with the user being able to choose between incrementing and
                decrementing.
                <br />
                <br />
                Then, the first problem was to understand the given schematic,
                as I had never read a schematic before. Once I understood the
                schematic, it had to be completed, as only part of it was
                provided, the other part had to be designed. So, it involved a
                lot of research on the web and reading datasheets to choose
                exactly what was needed.
                <br />
                <br />
                Finally, I had to understand how the communications card worked,
                which was also complicated. There was documentation which proved
                to be very useful because a certain file had to be installed for
                the card to work with the computer. Afterwards, the card&apos;s
                functions had to be integrated into our code to ensure
                communication between the circuit and the program. The program
                would read the sensor&apos;s status as an input to determine
                whether an object had passed in front of it. If an object was
                detected, the outputs would be activated to display the count on
                the 7-segment displays.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            Second-year multidisciplinary project
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/photo_struc.jpg"
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
                Figure 2 - Second-year multidisciplinary project&apos;s
                structure
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                In my second year of university college, I was tasked with
                creating an automated system to sort and count golf balls by
                color. The project had two parts: the embedded system and the
                website.
                <br />
                <br />
                First, the system used a cardboard tube to place the balls. A
                servomotor blocked the output to allow only one ball to pass at
                a time. A stepper motor moved the balls to either a yellow or
                pink container, powered by a motor shield that supports up to 36
                volts and multiple motors. The system could be reset by pressing
                a button, and the last detected ball was displayed on an LCD
                (Liquid Crystal Display).
                <br />
                <br />
                Then, For color detection, I chose the HuskyLens camera over a
                color sensor because it was easier to use, more accurate, and
                simpler to install. I calibrated the camera by teaching it the
                colors to recognize and storing them in its database. The
                Arduino code then matched the color IDs to those in the
                camera&apos;s database.
                <br />
                <br />
                Finally, I developed a website using Next.js to display the
                data. The website, hosted on a Raspberry Pi, reads the data from
                the Arduino via USB, stores it in a database, and shows the
                number of balls of each color and the last detected ball.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            Third-year industrial project
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/mini-usine4.png"
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
                Figure 3 - Third-year industrial project
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                The goal of the project was to securely retrieve data from the
                PLC of the mini-usine 4, located on the TechnoCampus site in
                Mons. To achieve this, an Ewon device was set up, which is an
                industrial firewall, to allow secure data collection via a VPN
                tunnel. The PLC, using the OPC UA protocol for communication,
                sent the data to Node-RED, configured as an OPC UA client, which
                then forwarded it to a WebSocket.
                <br />
                <br />
                The collected data was displayed on a website built with the
                T3-App stack. Access was restricted to administrators, with
                authentication managed by Next-Auth.js and Discord.
                <br />
                <br />
                Finally, the data was visualised on a Meta Quest 3 using Unity.
                Mixed reality techniques were used to enhance the interaction
                and provide an immersive presentation of the data.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            Third-year multidisciplinary project
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/projet3.png"
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
                Figure 4 - Block shcematic of the third-year multidisciplinary
                project
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                During my final year at university college HELHa, I was assigned
                my last project of my studies. I could create anything I wanted
                as long as it was related to the industry. I decided to create a
                system that closes windows after a specific hour because many
                people often leave rooms without closing the windows, which can
                cause issues, like heating the room efficiently. Additionally, I
                added a feature that checks if the temperature is too high,
                opening the windows when the temperature reaches a certain
                point.
                <br />
                <br />
                The autonomous system uses an ESP8266 and consists of two boxes.
                One box contains the controls of the system, which include a
                keypad to enter the time or temperature and two LCD screens to
                display the chosen time and temperature. The other box contains
                all the actuators and sensors of the project: a temperature
                sensor, an RTC module, and a servomotor to control the opening
                or the closing of the windows.
                <br />
                <br />
                Along with the autonomous system, I had to create a mobile
                application with a two-way connection to the ESP8266 to manage
                data transmission. The application was created using Expo Go and
                displays the outputs from the ESP8266 while also providing a
                history of these outputs.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "3rem" }}
          >
            MIC Tech Goes Wilds Hackathon
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/hackathon.jpg"
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
                Figure 45 - Tech Goes Wilds Hackathon
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" gutterBottom>
                I worked in a team of six students during a 3-day hackathon. On
                the first day, we had to choose between working with AI or VR,
                and we decided to work with AI. Then, I learnt about AI and how
                to implement it in Python code. After that, we were asked to
                come up with a project to develop during the 3 days. This was
                challenging because none of us had experience with AI. Finally,
                we came up with the idea of creating a custom chatbot that could
                store an almost unlimited number of files and retrieve answers
                from them when a user made a request.
                <br />
                <br />
                This project required a lot of online research to decide which
                technologies to use. We implemented RAG (Retrieval-Augmented
                Generation) for response generation, FAISS (Facebook AI
                Similarity Search) for efficient similarity searches, and Gradio
                to create the user interface. These were the main technologies
                necessary for the AI to function as intended. Once everything
                was working, I decided to add some features: text-to-speech and
                speech-to-text functionalities using Google API, which allowed
                the chatbot to read text out loud and transcribe speech to text.
                Additionally, we integrated image recognition into the chatbot.
                <br />
                <br />
                This project won third place in a competition judged by industry
                leaders from Microsoft and Proximus.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );
}
