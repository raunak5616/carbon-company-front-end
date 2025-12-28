import React from "react";
import {AppBar,Box,Button,Container,Typography,Toolbar,Stack,Card,CardContent,} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useCountdown } from "../countdoun";
import bitcoinimg from "../../assets/images/bitcoin.jpg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { hours, minutes, seconds } = useCountdown("2025-12-31T23:59:59");
  const navigate = useNavigate();


  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, #7f00ff, #1a001f 60%)",
        color: "#fff",
      }}
    >

      <AppBar position="static" sx={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
          <Typography variant="h6" fontWeight="bold">
            NFT
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2"><Button
  onClick={() => navigate("/about")}  sx={{
    cursor: "pointer",
    color: "#fff",
  }}

>
  About Us
</Button></Typography>
            <Typography variant="body2">Store</Typography>
            <Typography variant="body2">Games</Typography>
            <Button
              variant="contained"
              sx={{
                background: "#fff",
                color: "#000",
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Connect Wallet
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>


      <Container sx={{ mt: { xs: 6, md: 10 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 10 }}
          alignItems="center"
        >
          <Box flex={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                lineHeight: 1.2,
              }}
            >
              Discover Rare <br />
              Collections Of <br />
              Art & NFTs
            </Typography>

            <Typography sx={{ mt: 2, color: "#cfcfcf", maxWidth: 420 }}>
              Create, Explore, & Collect Digital Art NFTs
            </Typography>

            <Button
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                background: "linear-gradient(90deg,#ff00cc,#3333ff)",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Explore
            </Button>

            <Stack
              direction="row"
              spacing={4}
              mt={6}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Stat value="32k+" label="Artwork" />
              <Stat value="20k+" label="Auctions" />
              <Stat value="10k+" label="Artists" />
            </Stack>
          </Box>


          <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                width: 320,
                background: "linear-gradient(180deg,#6a11cb,#2575fc)",
                borderRadius: 4,
                color: "#fff",
              }}
            >
              <CardContent>
                <Typography fontWeight="bold">Laura</Typography>

                <Typography variant="body2" sx={{ mt: 1 }}>
                  Remaining Time
                </Typography>

                <Typography fontWeight="bold" sx={{ my: 1 }}>
                  {`${hours}h : ${minutes}m : ${seconds}s`}
                </Typography>

                <Typography variant="body2">Current Bid</Typography>
                <Typography variant="h6" fontWeight="bold">
                  2.8 ETH
                </Typography>

                <Button
                  fullWidth
                  sx={{
                    mt: 2,
                    background: "#fff",
                    color: "#000",
                    fontWeight: 600,
                  }}
                >
                  Place a Bid
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>

   
      <Container sx={{ mt: { xs: 10, md: 14 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 10 }}
          alignItems="center"
        >
     
          <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={bitcoinimg}
              alt="Bitcoin Art"
              sx={{
                width: { xs: 260, sm: 320, md: 360 },
                height: { xs: 260, sm: 320, md: 360 },
                borderRadius: 4,
                objectFit: "cover",
                boxShadow: "0 0 40px rgba(128,0,255,0.6)",
              }}
            />
          </Box>

          <Box flex={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", md: "2.8rem" } }}
            >
              Bitcoin <br /> Art Work
            </Typography>

            <Typography sx={{ mt: 1, color: "#cfcfcf" }}>
              Created by{" "}
              <Box component="span" sx={{ color: "#a855f7", fontWeight: 600 }}>
                Jonathan Borba
              </Box>
            </Typography>

            <Stack
              direction="row"
              spacing={4}
              mt={4}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
       
              <Box>
                <Typography variant="body2" color="#aaa">
                  Current Bid
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  1.09 ETH
                </Typography>
                <Typography variant="body2" color="#aaa">
                  $1,835
                </Typography>
              </Box>

              <Box sx={{ width: "1px", background: "#444" }} />


              <Box>
                <Typography variant="body2" color="#aaa">
                  Auction Ends In
                </Typography>

                <Stack direction="row" spacing={2} mt={1}>
                  <TimeBox value={hours} label="Hours" />
                  <TimeBox value={minutes} label="Minutes" />
                  <TimeBox value={seconds} label="Seconds" />
                </Stack>
              </Box>
            </Stack>

            <Button
              sx={{
                mt: 4,
                px: 3,
                py: 1.2,
                background: "#fff",
                color: "#000",
                fontWeight: 600,
                borderRadius: 2,
              }}
              endIcon={<ArrowOutwardIcon />}
            >
              View Art Work
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>

   
  );
};


const Stat = ({ value, label }) => (
  <Box textAlign="center">
    <Typography variant="h5" fontWeight="bold">
      {value}
    </Typography>
    <Typography variant="body2" color="#aaa">
      {label}
    </Typography>
  </Box>
);

const TimeBox = ({ value, label }) => (
  <Box textAlign="center">
    <Typography fontWeight="bold" fontSize="1.2rem">
      {value}
    </Typography>
    <Typography variant="caption" color="#aaa">
      {label}
    </Typography>
  </Box>
);
