import { useState } from 'react';
import './CodePreview.scss';

interface CodePreviewProps {
  preview: React.ReactNode;
  code: string;
  title?: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ preview, code, title }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="code-preview">
      {title && <h4>{title}</h4>}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
        <button
          className={`tab ${activeTab === 'code' ? 'active' : ''}`}
          onClick={() => setActiveTab('code')}
        >
          Code
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'preview' && <div className="preview-content">{preview}</div>}
        {activeTab === 'code' && (
          <div className="code-content">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;
