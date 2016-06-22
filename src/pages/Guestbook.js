import React from 'react';
import Form from '../components/Form';
import List from '../components/List';

const Guestbook = () => {
  return (
    <div className="guestbook">
      <Form />
      <hr />
      <List />
    </div>
  );
};

export default Guestbook;
