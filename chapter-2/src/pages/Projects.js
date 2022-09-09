import {useEffect, useState} from "react";
import {List} from "../components/List";
import {Link} from "../components/Header/Link";

export function Projects({username}) {
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`htttps://api.github.com/users/${username}/repos`);
            const data = await response.json();
            if (data) {
                setProjects(data);
                setLoading(false);
            }
        }

        fetchData()
    }, [username])
    return (<div className={"Profile-container"}>
        <h2>Projects</h2>
        {loading ? (<span>Loading....</span>) : (<div>
            <List items={projects.map((project) => ({
                    field: project.name, value: <Link url={project.html_url}
                                                      title={project.html_url}
                    />
                })
            )}/>
        </div>)}
    </div>)
}