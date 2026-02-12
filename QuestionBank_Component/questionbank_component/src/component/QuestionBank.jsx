import React, { useEffect, useState } from "react";
import "../App.css"
const GetAllQuestions = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/FileIOServlet/api/getAllQuestions")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("something wrong");
                }
                return response.json();
            })
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading.......</p>;
    if (error) return <p>Error....{error}</p>;



    return (
        <div className="container">
            <div className="table-box">
                <h2>Question List</h2>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );




};
export default GetAllQuestions;