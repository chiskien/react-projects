import {useEffect, useState} from "react";

export function Profile({username}) {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    useEffect(() => {
            async function fetchData() {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const data = await response.json();

                if (data) {
                    setProfile(data);
                    setLoading(true);
                }
            }

            fetchData().then(r => console.log(r));
        }, [username]
    )

    return (
        <div>
            <h2>About me</h2>
            {loading ? (<span>Loading.....</span>) : (
                <ul>

                </ul>
            )}
        </div>
    )

}