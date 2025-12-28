import React from "react";
import {Box,Container,Typography,Stack,Card,CardContent} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, #7f00ff, #1a001f 60%)",
        color: "#fff",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container>
   <IconButton
  onClick={() => navigate("/")}
  sx={{
    color: "#fff",
    mb: 3,
    background: "rgba(255,255,255,0.1)",
    "&:hover": {
      background: "rgba(255,255,255,0.2)",
    },
  }}
>
  <ArrowBackIcon />
</IconButton>

        <Stack spacing={2} textAlign="center" mb={8}>
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2.2rem", md: "3rem" },
            }}
          >
            About NFTme
          </Typography>
<Typography
  color="#cfcfcf"
  maxWidth={600}
  mx="auto"
  textAlign="center"
>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsum
  cupiditate architecto rerum nesciunt! Nobis quo repellat culpa id.
  Similique recusandae nemo magni cum ad officia sapiente accusantium
  molestiae, soluta adipisci voluptatem.
</Typography>
        </Stack>

 
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          mb={10}
        >
          <InfoCard
            title="Our Mission"
            text="To empower artists and creators by providing a secure,
            transparent, and decentralized platform to showcase and sell their
            digital artworks."
          />

          <InfoCard
            title="Our Vision"
            text="We envision a future where digital ownership is accessible to
            everyone and NFTs redefine the way value is created and exchanged."
          />

          <InfoCard
            title="Why NFTme?"
            text="With low fees, live auctions, wallet integration, and a modern
            user experience, NFTme makes NFT trading simple and powerful."
          />
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="center"
          textAlign="center"
        >
          <Stat value="32k+" label="Artworks Listed" />
          <Stat value="20k+" label="Live Auctions" />
          <Stat value="10k+" label="Verified Artists" />
          <Stat value="100%" label="Secure Transactions" />
        </Stack>
      </Container>
    </Box>
  );
};

const InfoCard = ({ title, text }) => (
  <Card
    sx={{
      flex: 1,
      background: "linear-gradient(180deg,#2a003d,#12001f)",
      borderRadius: 4,
      color: "#fff",
      boxShadow: "0 0 30px rgba(128,0,255,0.3)",
    }}
  >
    <CardContent>
      <Typography variant="h6" fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <Typography variant="body2" color="#cfcfcf">
        {text}
      </Typography>
    </CardContent>
  </Card>
);

const Stat = ({ value, label }) => (
  <Box>
    <Typography fontWeight="bold" fontSize="2rem">
      {value}
    </Typography>
    <Typography color="#aaa">{label}</Typography>
  </Box>
);
