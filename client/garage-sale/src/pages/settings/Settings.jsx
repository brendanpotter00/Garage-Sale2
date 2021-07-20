import React from 'react';
import "./settings.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import profile from "../../imgs/profile.png";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function Settings() {

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
          userId: user._id,
          username,
          email,
          password,
        };
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          updatedUser.profilePic = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.put("/users/" + user._id, updatedUser);
          setSuccess(true);
          dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
          dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                        alt=""/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} name="name" onChange={(e) => setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} name="email" onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                    {success && (
                        <span
                        style={{ color: "lightgreen", textAlign: "center", marginTop: "20px" }}
                        >
                        Profile has been updated.
                        </span>
                    )}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
