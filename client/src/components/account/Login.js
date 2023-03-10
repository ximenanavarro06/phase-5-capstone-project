import React, { useState } from "react"
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import {useHistory} from "react-router-dom"
import {CardButton} from "../../styles/Card"


function Login({onLogin, history}) {
    const [showLogin, setShowLogin] = useState(true);

    const redirect = () => {
        history.push('/me');
    }

    return (
        <Wrapper>
            <Logo className="Header">Workout or Die</Logo>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} redirect={redirect}/>
                    <Divider />
                    <p>
                        Don't have an account? &nbsp;
                        <CardButton color="secondary" onClick={() => setShowLogin(false)}>
                            Sign Up
                        </CardButton>
                    </p>
                </>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin} redirect={redirect}/>
                    <Divider />
                    <p>
                        Already have an account? &nbsp;
                        <CardButton color="secondary" onClick={() => setShowLogin(true)}>
                            Log In
                        </CardButton>
                    </p>
                </>
            )}
        </Wrapper>
    );
}

const Logo = styled.h1`
    font-family: "Permanent Marker";
    font-size: 3rem;
    color: palevioletred;
    margin: 8px 0 16px;
    margin-left: 82px
`;

const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
`;

const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 16px 0;
`;

export default Login;

// function Login({onLogin, history}) {
//     const [showLogin, setShowLogin] = useState(true);

//     const redirect = () => {
//         history.push("/me");
//     }




//     return (
//         <div>
//             {showLogin ? (
//                 <>
//                 <LoginForm onLogin={onLogin} redirect={redirect}/>

//                 <p>
//                     Don't have an account? &nbsp;
//                     <button onClick={() => setShowLogin(false)}>
//                         Sign Up
//                     </button>
//                 </p>
//                 </>
//             ) : (
//                 <>
//                 <SignUpForm onLogin={onLogin} redirect={redirect}/>

//                 <p>
//                     Already have an account? &nbsp;
//                     <button onClick={redirect}>
//                         Log in
//                     </button>
//                 </p>
//                 </>
//             )}
//         </div>
//     )
// }


// export default Login