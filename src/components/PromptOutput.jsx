import React, { useState } from 'react';

const PromptOutput = ({ finalPrompt }) => {
    const [copiedLabel, setCopiedLabel] = useState('Copy Prompt');

    const copyToClipboard = (text) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopiedLabel('Copied!');
        setTimeout(() => setCopiedLabel('Copy Prompt'), 2000);
    };

    return (
        <div className="prompt-output-panel">
            <div className="prompt-box glass-panel">
                <h3>Final Prompt</h3>
                <div className="prompt-content" style={{ minHeight: '100px' }}>
                    {finalPrompt || "Construct your cinematic vision by selecting parameters from the sidebar..."}
                </div>
                {finalPrompt && (
                    <button className="copy-btn" onClick={() => copyToClipboard(finalPrompt)}>
                        {copiedLabel}
                    </button>
                )}
            </div>

            <div style={{ padding: '0 1rem', fontSize: '0.7rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <p>This prompt is optimized for high-end AI image generators like Midjourney, Stable Diffusion, and DALL-E.</p>
            </div>
        </div>
    );
};

export default PromptOutput;
