import { useState } from 'react';
import Button from '../components/Button/Button';
import Toggle from '../components/Toggle/Toggle';
import CodePreview from '../components/CodePreview/CodePreview';
import Card from '../components/Card/Card';

const Buttons = () => {
  const [count, setCount] = useState(0);
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className="page">
      <h1>Button Components</h1>
      <p>Interactive buttons with smooth hover animations and click feedback.</p>

      <CodePreview
        title="Basic Interactive Button"
        preview={
          <Button onClick={() => alert('Button clicked!')}>
            Click Me
          </Button>
        }
        code={`<Button onClick={() => alert('Button clicked!')}>
  Click Me
</Button>`}
      />

      <CodePreview
        title="Counter Button with State"
        preview={
          <Button onClick={() => setCount(count + 1)}>
            Count: {count}
          </Button>
        }
        code={`const [count, setCount] = useState(0);

// ...

<Button onClick={() => setCount(count + 1)}>
  Count: {count}
</Button>`}
      />

      <CodePreview
        title="Toggle Switch with Heroicons"
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Status: {toggleState ? 'ON' : 'OFF'}</span>
            <Toggle initialState={toggleState} onToggle={setToggleState} />
          </div>
        }
        code={`const [toggleState, setToggleState] = useState(false);

// ...

<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
  <span>Status: {toggleState ? 'ON' : 'OFF'}</span>
  <Toggle initialState={toggleState} onToggle={setToggleState} />
</div>`}
      />

      <Card>
        <h3>💡 Pro Tip</h3>
        <p>More button variants (outlined, icon buttons, motion presets) are available in the Pro version.</p>
      </Card>
    </div>
  );
};

export default Buttons;
