import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  IoIosPhotos,
  IoMdBrush,
  IoLogoGameControllerA,
  IoIosSwitch,
  IoMdHammer,
  IoIosHeart,
  IoIosPerson,
  IoMdTimer,
  IoMdShuffle,
} from "react-icons/io";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "3rem 1rem",
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

const HobbyBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "2rem",
  justifyContent: "flex-start",
});

const HobbyIcon = styled(Box)(({ theme }) => ({
  fontSize: "3rem",
  color: theme.palette.primary.main,
  marginRight: "1rem",
}));

export default function AboutMe() {
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
        About me
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          alignSelf: "flex-start",
          marginBottom: "2rem",
          color: "#2C3E50",
        }}
      >
        My hobbies
      </Typography>
      {/* Photography Card */}
      <StyledCard>
        <CardContent>
          <HobbyBox>
            <HobbyIcon>
              <IoIosPhotos />
            </HobbyIcon>
            <Box>
              <Typography variant="h5" gutterBottom>
                Photography
              </Typography>
              <Typography variant="body1" gutterBottom>
                I really enjoy photography, especially when it involves
                capturing the beauty of the night sky. It is a hobby that allows
                me to relax and spend quality time with myself, clearing my mind
                of daily stress. The process of setting up the equipment,
                adjusting the settings, and waiting for the perfect shot teaches
                me patience and focus.
                <br />
                <br />
                Taking pictures of the stars can be challenging, as it often
                requires several attempts before getting the desired result, but
                I see those failed pictures as part of the learning process.
                When I finally capture a perfect picture, it feels really
                rewarding and justifies all the effort, and it motivates me to
                continue exploring and improving my skills.
              </Typography>
            </Box>
          </HobbyBox>
        </CardContent>
      </StyledCard>

      {/* Drawing Card */}
      <StyledCard>
        <CardContent>
          <HobbyBox>
            <HobbyIcon>
              <IoMdBrush />
            </HobbyIcon>
            <Box>
              <Typography variant="h5" gutterBottom>
                Drawing
              </Typography>
              <Typography variant="body1" gutterBottom>
                I really enjoy drawing; it is a very relaxing activity but also
                one that brings a lot of challenges.
                <br />
                <br />
                It is relaxing because I find myself in a calm environment and,
                most importantly, with myself. This helps me focus and try to
                improve in this area, as it is not easy to copy what you see
                when using a reference because you are often not as experience
                as the author. However, it is also challenging because it
                teaches me to persevere and become even better in something I
                truly love.
                <br />
                <br />
                Also, when I start to lose focus in a situation where I need to
                concentrate a lot, drawing small sketches on a piece of paper
                helps me stay focused. It is a manual activity that does not
                require much listening, which allows me to keep paying attention
                and quickly regain my concentration in that situation.
              </Typography>
            </Box>
          </HobbyBox>
        </CardContent>
      </StyledCard>

      {/* Video Games Card */}
      <StyledCard>
        <CardContent>
          <HobbyBox>
            <HobbyIcon>
              <IoLogoGameControllerA />
            </HobbyIcon>
            <Box>
              <Typography variant="h5" gutterBottom>
                Video Games
              </Typography>
              <Typography variant="body1" gutterBottom>
                My biggest hobby is playing video games, especially games that
                require long-term commitment like Warframe, an action
                role-playing third-person shooter multiplayer online game. I
                really enjoy these games because I can achieve a goal, I have
                set myself, by going step by step in a daily basis, without
                rushing. This teaches me that projects cannot be rushed, that I
                must be consistent with the work I produce for me to not be
                disgusted with the project.
                <br />
                <br />I also like to play games that require perseverance, like
                Geometry Dash or Elden Ring, because it is a real challenge to
                try and complete a level or fight a boss without losing your
                nerve. As a result, I have learnt that I need to be persistent
                if I want to see results, not only in video games but also in
                real life, because a project will never be easy, there will
                always be new technologies to explore and learn. Most
                importantly, I have learnt to keep myself calm and not to be on
                my nerve as it will never resulting on a good production!
              </Typography>
            </Box>
          </HobbyBox>
        </CardContent>
      </StyledCard>

      {/* Start of qualities and flaws Card */}

      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          alignSelf: "flex-start",
          marginBottom: "2rem",
          marginTop: "4rem",
          color: "#2C3E50",
        }}
      >
        My Qualities
      </Typography>
      {/* Adaptable Card */}
      <StyledCard>
        <CardContent>
          <HobbyBox>
            <HobbyIcon>
              <IoIosSwitch />
            </HobbyIcon>
            <Box>
              <Typography variant="h5" gutterBottom>
                Adaptable
              </Typography>
              <Typography variant="body1" gutterBottom>
                If I am asked to work on a project with a technology I have
                never used before, I will not give up, I will do some online
                research to find out more. In my second-year project, I had to
                work with a stepper motor, which I had never used before, and I
                encountered many problems. I went to school three times a week
                during the holidays to overcome my problems, which was done
                quickly. As a result, the part of the project that used the
                stepper motor worked properly without any flaws.
              </Typography>
            </Box>
          </HobbyBox>
        </CardContent>
      </StyledCard>

      {/* Hard-Working Card */}
      <StyledCard>
        <CardContent>
          <HobbyBox>
            <HobbyIcon>
              <IoMdHammer />
            </HobbyIcon>
            <Box>
              <Typography variant="h5" gutterBottom>
                Hard-Working
              </Typography>
              <Typography variant="body1" gutterBottom>
                During a big task or project, I will work hard to achieve the
                goal of the project. As I have already mentioned, during my
                project in the second year, I often came to school for several
                weeks to finish what I had been assigned. My team members were
                counting on me, so I felt that I could give my full attention to
                the project.
              </Typography>
            </Box>
          </HobbyBox>
        </CardContent>
      </StyledCard>

      {/* Compassionate Card */}
      <StyledCard>
        <CardContent>
          <HobbyBox>
            <HobbyIcon>
              <IoIosHeart />
            </HobbyIcon>
            <Box>
              <Typography variant="h5" gutterBottom>
                Compassionate
              </Typography>
              <Typography variant="body1" gutterBottom>
                If I am in a group with other people and one of them does not do
                enough work, I will not immediately talk behind his back and
                judge him. I will try to understand the meaning of his poor work
                and help him in his struggle.
              </Typography>
            </Box>
          </HobbyBox>
        </CardContent>
      </StyledCard>

      {/* Start of flaws and flaws Card */}

      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          alignSelf: "flex-start",
          marginBottom: "2rem",
          marginTop: "4rem",
          color: "#2C3E50",
        }}
      >
        My Flaws
      </Typography>
      {/* Shyness Card */}
      <StyledCard>
        <CardContent>
          <HobbyBox>
            <HobbyIcon>
              <IoIosPerson />
            </HobbyIcon>
            <Box>
              <Typography variant="h5" gutterBottom>
                Shyness
              </Typography>
              <Typography variant="body1" gutterBottom>
                I find it very difficult to meet new people, I am often
                reluctant to talk to strangers, even if they are my classmates.
                However, I do not keep away from everyone, I always try to
                overcome this weakness and talk to new people, and it often
                results in a good relationship with them! I just need to talk a
                little and I become more confident.
              </Typography>
            </Box>
          </HobbyBox>
        </CardContent>
      </StyledCard>

      {/* Procrastination Card */}
      <StyledCard>
        <CardContent>
          <HobbyBox>
            <HobbyIcon>
              <IoMdTimer />
            </HobbyIcon>
            <Box>
              <Typography variant="h5" gutterBottom>
                Procrastination
              </Typography>
              <Typography variant="body1" gutterBottom>
                Although I have learnt the importance of starting projects
                early, I still sometimes procrastinate, which leaves me with
                less time for development. However, this helps me to learn to
                work under pressure as the deadline approaches. It is a weakness
                that I am actively working on.
              </Typography>
            </Box>
          </HobbyBox>
        </CardContent>
      </StyledCard>

      {/* Poor Organization Card */}
      <StyledCard>
        <CardContent>
          <HobbyBox>
            <HobbyIcon>
              <IoMdShuffle />
            </HobbyIcon>
            <Box>
              <Typography variant="h5" gutterBottom>
                Poor Organization
              </Typography>
              <Typography variant="body1" gutterBottom>
                This is related to my procrastination. As a result of it, I find
                myself facing much more work in a much shorter amount of time,
                so I often start several tasks at once. I do not plan anything
                in advance, which leads to a big pile of work. Nevertheless,
                this adds pressure, and I am learning to work with it. In the
                end, I manage to produce a finished product.
              </Typography>
            </Box>
          </HobbyBox>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );
}
