import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const Navbar = () => {
  const navigate = useNavigate();

  const linkToSignUp = () => navigate("/signup");
  const linkToSignIn = () => navigate("/signin");
  const linkToHome = () => navigate("/");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            onClick={linkToHome}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Where To Travel
          </Typography>
          <Link
            color={grey[50]}
            component="button"
            variant="body1"
            onClick={linkToSignUp}
          >
            Sign Up
          </Link>
          <Link
            sx={{ padding: "1rem" }}
            color={grey[50]}
            component="button"
            variant="body1"
            onClick={linkToSignIn}
          >
            Sign In
          </Link>
          <Button onClick={linkToHome}>
            <Link color={grey[50]}>
              <HomeIcon />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
