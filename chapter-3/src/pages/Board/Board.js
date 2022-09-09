import {useEffect, useState} from "react";

export function Board() {
    const [loading, setLoading] = useState(false);
    const [tasks, setTask] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const tasks = await fetch(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`);
                const result = await tasks.json();

                if (result) {
                    setTask(result);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                setError(error.message)
            }
        }

        fetchData();
    }, [])

}