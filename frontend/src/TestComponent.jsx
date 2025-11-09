import { useEffect, useState } from 'react';
import { testAPI } from '../api.js';

function TestComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    testAPI()
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return <div>Backend says: {message}</div>;
}

export default TestComponent;
