import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import './Review1_results.css';

function Review2_results() {
  const [result, setResult] = useState([]);

  //  const userEmail = 'parasrauwtSs@gmail.com';
   const userEmail = localStorage.getItem('userEmail');
  // const userEmail = 'example@example.com'

  async function loaddata() {
    const response = await fetch('http://localhost:5000/getresult2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail}),
    });
    const json = await response.json();
    console.log(json)
    setResult(json);
  }

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <Container>
      {result.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Marks</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody className='pp'>
            {result.map((row) => (
              <tr key={row.id}>
                <td style={{ color: "aqua" }}>{row.id}</td>
                <td style={{ color: "aqua" }}>{row.email}</td>
                <td style={{ color: "aqua" }}>{row.marks}</td>
                <td style={{ color: "aqua" }}>{row.createdAt}</td>
                <td style={{ color: "aqua" }}>{row.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="no-results-message">Waiting for the guide to evaluate your topic...</div>
      )}
    </Container>
  );
      }
export default Review2_results;