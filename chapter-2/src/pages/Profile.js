import {useEffect, useState} from "react";
import "./Profile.css";
import {Link} from "../components/Header/Link";

export function Profile({username}) {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const result = await response.json();
            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }

        fetchData();
    }, [username]);

    return (<div className={`Profile-container`}>
        {loading ? (<span>Loading.....</span>) : (<div>
            <h2>About me</h2>
            <img src={profile.avatar_url} alt={profile.name} className="Profile-avatar"/>
            <ul>
                <li>
                    <span>html_url: </span>
                    <Link url={profile.html_url} title={profile.html_url}/>
                </li>
                <li>
                    <span>repos_url: </span>
                    <Link url={profile.repos_url} title={profile.repos_url}/>
                </li>
                <li>
                    <span>Name: {profile.name}</span>
                </li>
                <li>
                    <span>Location: {profile.location}</span>
                </li>
            </ul>
        </div>)}
    </div>)
}