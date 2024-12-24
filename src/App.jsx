import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch data from the PHP API
        axios
            .get("http://localhost/my-api/connect.php")
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                setError("Failed to fetch data. Please check your backend.");
                console.error(error);
            });
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Employee List</h1>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : employees.length > 0 ? (
                <ul>
                    {employees.map((employee) => (
                        <li key={employee.emp_id}>
                            {employee.emp_id}: {employee.emp_fname}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
