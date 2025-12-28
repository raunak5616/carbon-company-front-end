import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
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
        {/* BACK BUTTON */}
        <IconButton
          onClick={() => navigate(-1)}
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
            Contact Us
          </Typography>

          <Typography color="#cfcfcf" maxWidth={600} mx="auto" textAlign="center">
            Have questions, feedback, or partnership ideas?  
            Reach out and we’ll get back to you shortly.
          </Typography>
        </Stack>


        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="stretch"
        >
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
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Get in Touch
              </Typography>

              <Typography color="#cfcfcf" mb={2}>
                Email: support@nftme.io
              </Typography>
              <Typography color="#cfcfcf" mb={2}>
                Phone: +91 98765 43210
              </Typography>
              <Typography color="#cfcfcf">
                Address: New Delhi, India
              </Typography>
            </CardContent>
          </Card>

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
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Send a Message
              </Typography>

              <Stack spacing={3}>
                <TextField
                  label="Your Name"
                  fullWidth
                  variant="outlined"
                 
                />

                <TextField
                  label="Email Address"
                  fullWidth
                  variant="outlined"
                 
                />

                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                
                />

                <Button
                  sx={{
                    mt: 2,
                    py: 1.2,
                    background: "#fff",
                    color: "#000",
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};
