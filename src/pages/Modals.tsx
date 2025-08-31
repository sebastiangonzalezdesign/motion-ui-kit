import { useState } from 'react';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Card from '../components/Card/Card';
import CodePreview from '../components/CodePreview/CodePreview';
import Hero from '../components/Hero/Hero';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const Modals = () => {
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  return (
    <div className="page">
      <Hero
        headline="Modal Components"
        description="Slide-in modals for user interactions with smooth animations."
        backgroundColor="brand-light"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <CodePreview
        title="Basic Modal"
        preview={
          <>
            <Button onClick={() => setIsBasicModalOpen(true)}>Open Basic Modal</Button>
            <Modal isOpen={isBasicModalOpen} onClose={() => setIsBasicModalOpen(false)}>
              <div className="modal-content-center">
                <CheckCircleIcon className="success-icon" />
                <h2>Modal Title</h2>
                <p>This is a sample modal with slide-in animation.</p>
                <div className="modal-actions">
                  <Button variant="outline" size="sm" onClick={() => setIsBasicModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button size="sm" onClick={() => setIsBasicModalOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </Modal>
          </>
        }
        code={`// BasicModalExample.jsx
import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

export default function BasicModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-content-center">
          <CheckCircleIcon className="success-icon" />
          <h2>Modal Title</h2>
          <p>This is a sample modal with slide-in animation.</p>
          <div className="modal-actions">
            <Button variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button size="sm" onClick={() => setIsModalOpen(false)}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// Notes:
// - Use the included .modal-content-center and .success-icon classes from the kit for styling.
// - Props: isOpen (bool), onClose (func), title (string)
`}
      />

      <CodePreview
        title="Confirmation Modal"
        preview={
          <>
            <Button variant="outline" onClick={() => setIsConfirmModalOpen(true)}>
              Delete Item
            </Button>
            <Modal isOpen={isConfirmModalOpen} onClose={() => setIsConfirmModalOpen(false)}>
              <div className="modal-content-center">
                <ExclamationTriangleIcon className="warning-icon" />
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                <div className="modal-actions">
                  <Button variant="outline" size="sm" onClick={() => setIsConfirmModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button size="sm" variant="primary" onClick={() => setIsConfirmModalOpen(false)}>
                    Delete
                  </Button>
                </div>
              </div>
            </Modal>
          </>
        }
        code={`import { useState } from 'react';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ConfirmModalExample() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setIsConfirmModalOpen(true)}>Delete Item</Button>

      <Modal isOpen={isConfirmModalOpen} onClose={() => setIsConfirmModalOpen(false)}>
        <div className="modal-content-center">
          <ExclamationTriangleIcon className="warning-icon" />
          <h2>Confirm Deletion</h2>
          <p>Are you sure you want to delete this item? This action cannot be undone.</p>
          <div className="modal-actions">
            <Button variant="outline" size="sm" onClick={() => setIsConfirmModalOpen(false)}>Cancel</Button>
    <Button size="sm" variant="primary" onClick={() => setIsConfirmModalOpen(false)}>Delete</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
`}
      />

      <CodePreview
        title="Custom Styled Modal"
        preview={
          <>
            <Button onClick={() => setIsCustomModalOpen(true)}>Open Custom Modal</Button>
            <Modal isOpen={isCustomModalOpen} onClose={() => setIsCustomModalOpen(false)}>
              <div className="modal-content-center">
                <CheckCircleIcon className="success-icon" />
                <h2>Success!</h2>
                <p>
                  Your changes have been saved successfully. The modal will automatically close in a
                  few seconds, or you can close it manually.
                </p>
                <Button size="sm" onClick={() => setIsCustomModalOpen(false)}>
                  Got it!
                </Button>
              </div>
            </Modal>
          </>
        }
        code={`import { useState } from 'react';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function CustomModalExample() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsCustomModalOpen(true)}>Open Custom Modal</Button>

      <Modal isOpen={isCustomModalOpen} onClose={() => setIsCustomModalOpen(false)}>
        <div className="modal-content-center">
          <CheckCircleIcon className="success-icon" />
          <h2>Success!</h2>
          <p>Your changes have been saved successfully. The modal will automatically close in a few seconds.</p>
          <Button size="sm" onClick={() => setIsCustomModalOpen(false)}>Got it!</Button>
        </div>
      </Modal>
    </>
  );
}
`}
      />

      <Card className="card--highlight">
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
          More modal variants (sizes, animations, form modals) are available in the Pro version.
        </p>
      </Card>
    </div>
  );
};

export default Modals;
