import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

export default function HomePage() {
  const [notes, setNotes] = useState([]);
  let { authTokens } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
    return () => {};
  }, []);

  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/notes/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${String(authTokens.access)}`,
      },
    });
    let data = await response.json();
    setNotes(data);
  };

  return (
    <div>
      <p>You are logged to the home page</p>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.id} - {note.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
