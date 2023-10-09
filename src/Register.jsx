import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")


    const handlesubmit = (e) => {
        e.preventDefault();
        let obj = {
            name,
            email,
            mobile,
            password,
            confirmPassword
        }
        console.log(obj)
        setName("");
        setEmail("");
        setMobile("");
        setPassword("");
        setConfirmPassword("");
    }

    function validateform() {
        if (name.length == 0) {
            alert("enter valid name")
        }
        if (email.length == 0) {
            alert("enter valid email")
        }
        if (mobile.length < 9) {
            alert("enter vallid 10 digit mobile no")
        }
    }

    return (
        <>
            <div>
                <form class="form" onSubmit={handlesubmit}>
                    <p class="title">Register </p>

                    <label>
                        <input class="input" type="text" placeholder="" required="Name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <span>Name</span>
                    </label>
                    <label>
                        <input class="input" type="email" placeholder="" required="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <span>Email</span>
                    </label>
                    <label>
                        <input pattern="/^\d{10}$/" class="input" type="number" placeholder="Mobile" required="" value={mobile}
                            onChange={(e) => setMobile(e.target.value)} />
                        <span>Mobile No</span>
                    </label>
                    <label>
                        <input class="input" type="password" placeholder="Password" value={password}
                            required="" onChange={(e) => setPassword(e.target.value)} />
                        <span>Password</span>
                    </label>
                    <label>
                        <input class="input" type="password" placeholder="" required="Password" value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                        <span>Confirm password</span>
                    </label>
                    <button class="btn" onClick={validateform}>Submit</button>
                    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
                </form>
            </div>
        </>
    )
}

export default Register