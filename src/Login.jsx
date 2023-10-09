import React, { useState } from 'react';


function Login() {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handlesumit = (e) => {
        e.preventDefault();

        let obj2 = {
            userName,
            userPassword
        }
        console.log(obj2)
        setUserName("");
        setUserPassword("");
    }

    return (
        <>

            <div class="login wrap" >
                <p class="title">Login </p>
                <form onSubmit={handlesumit}>
                    <input pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                        placeholder="Email" id="email" name="email" type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />
                    <input placeholder="Password" id="password" name="password" type="password" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} />
                    <input value="Login" class="btn" type="submit" />
                </form>
            </div>
        </>
    )
}

export default Login