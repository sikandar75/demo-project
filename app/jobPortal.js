import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const JobPortal = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "#f5f6fa", minHeight: "100vh" }}>
      <Grid container spacing={3}>
        {/* Left Sidebar */}
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2 }}>
            {/* Profile Section */}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src="https://via.placeholder.com/150"
                sx={{ width: 80, height: 80, mb: 2 }}
              />
              <Typography variant="h6" fontWeight="600">
                Albert Flores
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Clinton, Maryland
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Stats */}
            <Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2">Profile Visitors</Typography>
                <Typography variant="body2" fontWeight="600">
                  140
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2">Resume Viewers</Typography>
                <Typography variant="body2" fontWeight="600">
                  20
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2">My Jobs</Typography>
                <Typography variant="body2" fontWeight="600">
                  88
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Calendar */}
            <Box>
              <Typography variant="subtitle2" fontWeight="600">
                My Calendar
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Upcoming Interviews
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          {/* Header */}
          <Box mb={3}>
            <Typography variant="h5" fontWeight="600">
              Find your Dream Job, <span style={{ color: "#2C5BF3" }}>Albert!</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore the latest job openings and apply for the best opportunities available today!
            </Typography>
          </Box>

          {/* Job Sections */}
          {["Featured Jobs", "Recommended Jobs", "Latest Jobs"].map((section) => (
            <Box key={section} mb={4}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight="600">
                  {section}
                </Typography>
                <Button size="small">See {section}</Button>
              </Box>

              <Grid container spacing={2}>
                {[1, 2, 3, 4].map((job) => (
                  <Grid item xs={12} sm={6} md={3} key={job}>
                    <Card sx={{ p: 2 }}>
                      <CardContent>
                        <Typography variant="subtitle1" fontWeight="600">
                          UI/UX Designer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Teams • Seattle, USA (Remote)
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={1}>
                          1 day ago | 22 applicants
                        </Typography>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{ bgcolor: "#2C5BF3", textTransform: "none" }}
                        >
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobPortal;
