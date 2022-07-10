import IMG from "../../assets/img/WaysBookLogo.png"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Navbar from 'react-bootstrap/Navbar'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from 'react-avatar';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import IconBook from "../../assets/img/bookGrey.png"
import IconComplain from "../../assets/img/chatGrey.png"
import IconLogout from "../../assets/img/logoutRed.png"
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// const settings = [ 'Add Book', 'Complain', 'Logout' ];


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


function AdminNavbar() {

  const navigate = useNavigate()

  const addBook = () => {
    navigate('/add-book')
  }

  const complain = () => {
    navigate('/admin-complain')
  }

  const logout = () => {
    navigate('/')
  }

  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <div style={{display : "flex", width : "100%"}}>
            <div className="left" style={{marginLeft : "50px", flex : "50%", alignItems : "center", display : "flex"}}>
                <Link to="/"><img src={IMG} alt="" /></Link>
            </div>

              <div className="right" style={{display : "flex", flex : "50%", justifyContent : "flex-end", marginRight : "50px", alignItems : "center"}}>

                <div className="avatar">
                <Nav.Item className='ms-3 avatarIcon'>
                                <div className='dropdown'>
                                    <button
                                        id="dropdownMenu"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        type="button"
                                        className='btnDropDown'
                                        style={{border : 'none', background : "transparent"}}
                                    >
                                        <Avatar
                                            color="#3A3A3A"
                                            name="Anonim"
                                            size="50"
                                            src="https://e7.pngegg.com/pngimages/565/454/png-clipart-user-computer-icons-anonymity-head-miscellaneous-face.png"
                                            round={true}
                                        />
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu">
                                        <li>
                                            <button className="dropdown-item textTitle fs-5" type="button" onClick={addBook}>
                                                <img src={IconBook} style={{ width: "25px", height: "25px" }} alt="IconProfile" />
                                                {" "}Add Book
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item textTitle fs-5" type="button" onClick={complain}>
                                                <img src={IconComplain} style={{ width: "25px", height: "25px" }} alt="IconComplain" />
                                                {" "}Complain
                                            </button>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <button className="dropdown-item textTitle fs-5" type="button" onClick={logout}>
                                                <img src={IconLogout} style={{ width: "25px", height: "25px" }} alt="IconLogout" />
                                                {" "}Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                    </Nav.Item>
                </div>
              </div>
            </div>
  );
}

export default AdminNavbar