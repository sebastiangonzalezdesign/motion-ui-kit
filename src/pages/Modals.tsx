import { useState } from 'react';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Card from '../components/Card/Card';

const Modals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="page">
      <h1>Modal Components</h1>
      <p>Slide-in modals for user interactions.</p>
      <Card>
        <h3>Basic Modal</h3>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Modal Title</h2>
          <p>This is a sample modal with slide-in animation.</p>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Modal>
        <pre><code>{`<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <h2>Modal Title</h2>
  <p>This is a sample modal with slide-in animation.</p>
  <Button onClick={() => setIsModalOpen(false)}>Close</Button>
</Modal>`}</code></pre>
      </Card>
    </div>
  );
};

export default Modals;
