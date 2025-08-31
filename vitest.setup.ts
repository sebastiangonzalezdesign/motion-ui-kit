import '@testing-library/jest-dom';

// Mock framer-motion to render children directly for stable tests
import { vi } from 'vitest';
import React from 'react';

type DivProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

vi.mock('framer-motion', () => {
  return {
    motion: new Proxy(
      {} as Record<string, unknown>,
      {
        get: () => (props: DivProps) =>
          React.createElement('div', props as React.HTMLAttributes<HTMLDivElement>, props.children),
      } as ProxyHandler<Record<string, unknown>>
    ),
    AnimatePresence: ({ children }: { children?: React.ReactNode }) =>
      React.createElement('div', null, children),
  };
});

Object.defineProperty(window, 'getComputedStyle', { value: () => ({ overflow: '' }) });
