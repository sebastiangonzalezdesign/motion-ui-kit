import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';

function ModalWrapper() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>Modal Content</div>
      </Modal>
    </div>
  );
}

describe('Modal', () => {
  it('opens and closes when toggled', () => {
    render(<ModalWrapper />);
    const openBtn = screen.getByText('Open');
    fireEvent.click(openBtn);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Close modal'));
    expect(screen.queryByText('Modal Content')).toBeNull();
  });
});
