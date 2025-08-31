import { useState } from 'react';
import Button from '../components/Button/Button';
import Toggle from '../components/Toggle/Toggle';
import CodePreview from '../components/CodePreview/CodePreview';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import Hero from '../components/Hero/Hero';
import IconButton from '../components/IconButton/IconButton';
import {
  CheckCircleIcon,
  LightBulbIcon,
  XMarkIcon,
  HeartIcon,
  StarIcon,
  PlayIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const Buttons = () => {
  const [count, setCount] = useState(0);
  const [toggleState, setToggleState] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="page">
      <Hero
        headline="Button Components"
        description="Interactive buttons with smooth hover animations and click feedback."
        backgroundColor="brand-medium"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <CodePreview
        title="Basic Interactive Button"
        preview={
          <>
            <Button onClick={() => setIsModalOpen(true)}>Click Me</Button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <div className="modal-content-center">
                <CheckCircleIcon className="success-icon" />
                <h2 className="modal-title">Button Clicked!</h2>
                <p className="modal-description">
                  You successfully clicked the button! This is a custom modal with smooth
                  animations.
                </p>
                <div className="modal-actions">
                  <Button size="md" onClick={() => setIsModalOpen(false)}>
                    Close Modal
                  </Button>
                </div>
              </div>
            </Modal>
          </>
        }
        code={`// BasicButtonExample.jsx
import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

export default function BasicButtonExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Click Me</Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-content-center">
          <CheckCircleIcon className="success-icon" />
          <h2 className="modal-title">Button Clicked!</h2>
          <p className="modal-description">You successfully clicked the button! This is a custom modal with smooth animations.</p>
          <div className="modal-actions">
            <Button size="md" onClick={() => setIsModalOpen(false)}>Close Modal</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
`}
      />

      <CodePreview
        title="Counter Button with State"
        preview={<Button onClick={() => setCount(count + 1)}>Count: {count}</Button>}
        code={`import { useState } from 'react';
import Button from '../components/Button/Button';

const [count, setCount] = useState(0);

// ...

<Button onClick={() => setCount(count + 1)}>
  Count: {count}
</Button>`}
      />

      <CodePreview
        title="Toggle Switch with Heroicons"
        preview={
          <div className="grid grid-2">
            <div>
              <span>Status: {toggleState ? 'ON' : 'OFF'}</span>
            </div>
            <div>
              <Toggle initialState={toggleState} onToggle={setToggleState} />
            </div>
          </div>
        }
        code={`// ToggleExample.jsx
import { useState } from 'react';
import Toggle from '../components/Toggle/Toggle';

export default function ToggleExample() {
  const [state, setState] = useState(false);

  return (
    <div className="grid grid-2">
      <div>
        <span>Status: {state ? 'ON' : 'OFF'}</span>
      </div>
      <div>
        <Toggle initialState={state} onToggle={setState} />
      </div>
    </div>
  );
}
`}
      />

      <CodePreview
        title="Icon Button Examples"
        preview={
          <div className="grid grid-2">
            <div>
              <strong>Variants</strong>
              <div className="grid grid-3">
                <IconButton icon={XMarkIcon} aria-label="Close" />
                <IconButton icon={HeartIcon} variant="outline" aria-label="Like" />
                <IconButton icon={StarIcon} variant="ghost" aria-label="Favorite" />
                <IconButton icon={Cog6ToothIcon} variant="default" aria-label="Settings" />
              </div>
            </div>

            <div>
              <strong>Sizes</strong>
              <div className="grid grid-3">
                <IconButton icon={PlayIcon} size="sm" aria-label="Play small" />
                <IconButton icon={PlayIcon} size="md" aria-label="Play medium" />
                <IconButton icon={PlayIcon} size="lg" aria-label="Play large" />
              </div>

              <strong className="example-block">States</strong>
              <div>
                <IconButton icon={HeartIcon} aria-label="Like" />
                <span className="muted-text ml-1">Hover & Press</span>
              </div>
            </div>
          </div>
        }
        code={`// IconButtonExample.jsx
import IconButton from '../components/IconButton/IconButton';
import { XMarkIcon, HeartIcon, StarIcon, Cog6ToothIcon, PlayIcon } from '@heroicons/react/24/outline';

export default function IconButtonExample() {
  return (
    <div>
      {/* Variants */}
      <IconButton icon={XMarkIcon} aria-label="Close" />
      <IconButton icon={HeartIcon} variant="outline" aria-label="Like" />
      <IconButton icon={StarIcon} variant="ghost" aria-label="Favorite" />
      <IconButton icon={Cog6ToothIcon} variant="default" aria-label="Settings" />

      {/* Sizes */}
      <IconButton icon={PlayIcon} size="sm" aria-label="Play small" />
      <IconButton icon={PlayIcon} size="md" aria-label="Play medium" />
      <IconButton icon={PlayIcon} size="lg" aria-label="Play large" />
    </div>
  );
}
`}
      />

      <Card className="card--highlight ">
        <h3>
          <LightBulbIcon
            style={{
              width: '1.25rem',
              height: '1.25rem',
              display: 'inline',
              marginRight: '0.5rem',
            }}
          />
          Pro Tip
        </h3>
        <p>
          More button variants (outlined, icon buttons, motion presets) are available in the Pro
          version.
        </p>
      </Card>
    </div>
  );
};

export default Buttons;
