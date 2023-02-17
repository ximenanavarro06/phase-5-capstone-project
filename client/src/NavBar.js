import React from "react"
import {NavLink} from "react-router-dom"
import {CardButton} from "./styles/Card"
import styled from 'styled-components'


const linkStyles = {
    display: "inline-block",
    height: "60px",
    width: "60px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "pink",
    textDecoration: "none",
    borderColor: "black",
    border: "10px solid",
    color: "white",
    borderRadius: "360px"


    };

    const linkStyle = {
    display: "inline-block",
    width: "100px",
    padding: "12px",

    margin: "0 6px 6px",
    background: "pink",
    textDecoration: "none",
    color: "white",
    borderColor: "black",
            border: "10px solid"
    };


function NavBar({currentUser, setCurrentUser}) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setCurrentUser(null);
            }
        });
        }

    console.log(currentUser)


    return (
        <Wrapper>
        <div class="navpic">

            {currentUser ? (
                <NavLink to="/me" style={linkStyles} activeStyle={{background: "grey"}}>
                    <img src={currentUser.profile_pic}/>
                </NavLink>
            ) : (
                <p>
                No Account
                </p>
            )}

            <NavLink to="/workouts" style={linkStyles} activeStyle={{background: "grey"}}>
            <p style={{textAlign:"center"}}>Workouts</p>
            </NavLink>

            <NavLink to="/diets" style={linkStyles} activeStyle={{background: "grey"}}>
            <p style={{textAlign:"center"}}>Diets</p>
            </NavLink>

        <CardButton onClick = {handleLogoutClick} style={{width:"100px", marginLeft: "1200px"}}>
            Log Out
        </CardButton>



        </div>
        </Wrapper>
    );
    }

export default NavBar;

const Wrapper = styled.main `
.navpic img {
    position: absolute;
    height: 85px;
    width: 85px;
    top: 104px;
    left: 16px;
    border-radius: 50%;
    background: white;
    padding: 5px;
    margin-top: -100px
}
`
