import React from "react"
import {NavLink} from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    borderColor: "black",
            border: "10px solid",
    color: "white",


    };

    const linkStyle = {
    display: "inline-block",
    width: "50px",
    padding: "12px",

    margin: "0 6px 6px",
    background: "red",
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
        <header>
        <div className="navBar">

            {currentUser ? (
                <NavLink to="/me" style={linkStyles} activeStyle={{background: "grey"}}>
                    account
                </NavLink>
            ) : (
                <p>
                No Account
                </p>
            )}

        <button onClick = {handleLogoutClick}>
            Log Out
        </button>

        </div>
        </header>
    );
    }

export default NavBar;