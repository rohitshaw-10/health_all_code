// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// const Header = () => {
//   return (
//     <AppBar position="fixed">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           AI Healthcare Center
//         </Typography>
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/about">About</Button>
//         <Button color="inherit" component={Link} to="/services">Services</Button>
//         <Button color="inherit" component={Link} to="/contact">Contact</Button>
//         <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
//         <Button color="inherit" component={Link} to="/records">Records</Button>

//         {/* Simple Login and Sign Up Buttons */}
//         <Button color="inherit" component={Link} to="/login">Login</Button>
//         <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed"> {/* Changed from static to fixed */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AI Healthcare Center
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/services">Services</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/records">Records</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

