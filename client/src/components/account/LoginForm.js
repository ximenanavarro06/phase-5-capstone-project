import React , { useState } from 'react';
import {CardWrapper, CardHeader, CardHeading, CardBody, CardIcon, CardFieldset, CardInput, CardOptionsItem, CardOptions, CardOptionsNote, CardButton, CardLink} from "../../styles/Card"

function LoginForm({onLogin, redirect}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
        redirect()
    }


    return(
        <form onSubmit={handleSubmit}>
            <>
                <CardWrapper>
                    <CardHeader>
                        <CardHeading>Sign In</CardHeading>
                    </CardHeader>

                    <CardBody>
                        <div>
                            <CardFieldset>
                                <label htmlFor="username"></label>
                                <CardInput
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    autoComplete="off"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </CardFieldset>
                        </div>
                        <div>
                            <CardFieldset>
                                <label htmlFor="password"></label>
                                <CardInput
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                            </CardFieldset>
                        </div>
                        <div>
                            <CardButton variant="fill" color="primary" type="submit">
                                {isLoading ? "Loading..." : "Login"}
                            </CardButton>
                        </div>
                        <div>
                            {errors.map((err) => (
                            <p key={err}>{err}</p>
                            ))}
                        </div>
                    </CardBody>
                </CardWrapper>
            </>
        </form>
    );
}

export default LoginForm