import React, { useState } from 'react';
import Modal from './Modal';

const ExampleModal = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={(): void => setOpen(true)}>Click me to display modal!</button>
      <Modal open={open} onClose={(): void => setOpen(false)}>
        This is modal text.
        <p>It can be a lot of different things.</p>
        <button onClick={(): void => setOpen(false)}>This button will close the modal</button>
      </Modal>
    </>
  );
};

export default ExampleModal;
