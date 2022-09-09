import {useEffect, useState} from "react";
import "./Profile.css";
import {Link} from "../components/Header/Link";
import {List} from "../components/List";

export function Profile({username}) {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});
    const items = [{
        field: "html_url", value: <Link url={profile.html_url} title={profile.html_url}/>
    }, {
        field: 'repos_url', value: <Link url={profile.repos_url} title={profile.repos_url}/>,
    }, {
        field: "followers_url", value: <Link url={profile.followers_url} title={profile.followers_url}/>
    }]


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
            <List items={items}/>
        </div>)}
    </div>)
}