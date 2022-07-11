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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import LogoutIcon from '@mui/icons-material/Logout';
// import SmsIcon from '@mui/icons-material/Sms';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
import img from "../../assets/img/cart2.png"
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import IconProfile from "../../assets/img/customer.png"
import IconComplain from "../../assets/img/chatGrey.png"
import IconLogout from "../../assets/img/logoutRed.png"
import Avatar from "react-avatar"
import Profile from "../../pages/profile";
import { Link } from "react-router-dom";



function CustomerNavbar() {

  const navigate = useNavigate();

  const profile = () => {
    navigate('/profile')
  }

  const complain = () => {
    navigate('/complain')
  }

  const logout = () => {
    navigate('/')
  }


  return (
    <div style={{display : "flex", width : "100%"}}>
            <div className="left" style={{marginLeft : "50px", flex : "50%", alignItems : "center", display : "flex"}}>
                <Link to="/"><img src={IMG} alt="" /></Link>
            </div>

            <div className="right" style={{display : "flex", flex : "50%", justifyContent : "flex-end", marginRight : "50px", alignItems : "center"}}>
                <div className="carosel" style={{marginRight : "50px"}}>
                  <Link to="/cart"><img src={img} alt="" /></Link>
                </div>

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
                                            <button className="dropdown-item textTitle fs-5" type="button" onClick={profile}>
                                                <img src={IconProfile} style={{ width: "25px", height: "25px" }} alt="IconProfile" />
                                                {" "}Profile
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

export default CustomerNavbar