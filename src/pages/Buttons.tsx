import { useState } from 'react';
import Button from '../components/Button/Button';
import Toggle from '../components/Toggle/Toggle';
import Card from '../components/Card/Card';

const Buttons = () => {
  const [count, setCount] = useState(0);
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className="page">
      <h1>Button Components</h1>
      <p>Interactive buttons with smooth hover animations.</p>
      <Card>
        <h3>Basic Button</h3>
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
        <pre><code>{`<Button onClick={() => alert('Button clicked!')}>Click Me</Button>`}</code></pre>
      </Card>
      <Card>
        <h3>Counter Button</h3>
        <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
        <pre><code>{`<Button onClick={() => setCount(count + 1)}>Count: {count}</Button>`}</code></pre>
      </Card>
      <Card>
        <h3>Toggle Switch</h3>
        <p>Toggle State: {toggleState ? 'ON' : 'OFF'}</p>
        <Toggle initialState={toggleState} onToggle={setToggleState} />
        <pre><code>{`<Toggle initialState={false} onToggle={(state) => console.log(state)} />`}</code></pre>
      </Card>
    </div>
  );
};

export default Buttons;
