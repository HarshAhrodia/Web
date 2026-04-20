import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch courses from backend
    axios.get('http://localhost:5000/api/courses')
      .then((response) => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch courses');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.name}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;