import React from "react";
import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        mt: 0.5,
        py: 4,
        background:
          "radial-gradient(circle at top left, #7f00ff, #1a001f 65%)",
        color: "#fff",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" fontWeight="bold">
            NFTme
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Typography
              variant="body2"
              sx={{
                cursor: "pointer",
                opacity: 0.8,
                "&:hover": { opacity: 1 },
              }}
            >
              Explore
            </Typography>

            <Typography
              variant="body2"
              sx={{
                cursor: "pointer",
                opacity: 0.8,
                "&:hover": { opacity: 1 },
              }}
            >
              Marketplace
            </Typography>

            <Typography
              variant="body2"
              sx={{
                cursor: "pointer",
                opacity: 0.8,
                "&:hover": { opacity: 1 },
              }}
            >
              Artists
            </Typography>

            <Typography
      variant="body2"
      sx={{ cursor: "pointer", opacity: 0.8, "&:hover": { opacity: 1 } }}
      onClick={() => navigate("/contact")}
    >
      Contact
    </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton
              sx={{
                background: "#fff",
                "&:hover": { background: "#e5e5e5" },
              }}
            >
              <InstagramIcon sx={{ color: "#000" }} />
            </IconButton>

            <IconButton
              sx={{
                background: "#fff",
                "&:hover": { background: "#e5e5e5" },
              }}
            >
              <FacebookIcon sx={{ color: "#000" }} />
            </IconButton>

            <IconButton
              sx={{
                background: "#fff",
                "&:hover": { background: "#e5e5e5" },
              }}
            >
              <TwitterIcon sx={{ color: "#000" }} />
            </IconButton>
          </Stack>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          mt={4}
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="caption" color="#ccc">
            Privacy policy &nbsp; | &nbsp; Copyright © Raunak Kumar 2025. All
            Rights Reserved. &nbsp; | &nbsp; Terms of service
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
