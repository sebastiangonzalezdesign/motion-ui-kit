import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button', () => {
  it('renders children and responds to click', () => {
    const handle = vi.fn();
    render(<Button onClick={handle}>Click me</Button>);
    const btn = screen.getByText('Click me');
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(handle).toHaveBeenCalled();
  });
});
