import React, { useState } from 'react';

const VisualModal = ({ title, options, isOpen, onClose, onSelect }) => {
    const [filter, setFilter] = useState('');

    if (!isOpen) return null;

    const filteredOptions = options.filter(opt =>
        typeof opt === 'string'
            ? opt.toLowerCase().includes(filter.toLowerCase())
            : opt.label.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div>
                        <div className="input-label" style={{ marginBottom: '0.25rem' }}>{title}</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>Select {title.toLowerCase()}</div>
                    </div>
                    <button onClick={onClose} style={{ background: '#333', border: 'none', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.7rem' }}>CLOSE</button>
                </div>

                <div style={{ padding: '1.5rem', borderBottom: '1px solid #222' }}>
                    <input
                        type="text"
                        placeholder={`Filter ${title.toLowerCase()}...`}
                        className="text-input-area"
                        style={{ minHeight: 'auto' }}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                <div className="modal-grid">
                    {filteredOptions.map((opt, index) => {
                        const label = typeof opt === 'string' ? opt : opt.label;
                        const subLabel = typeof opt === 'object' ? opt.year : null;
                        const imageUrl = typeof opt === 'object' ? opt.image : null;

                        return (
                            <div
                                key={index}
                                className="modal-image-item"
                                onClick={() => {
                                    onSelect(label);
                                    onClose();
                                }}
                            >
                                <div className="modal-thumbnail-area">
                                    {imageUrl ? (
                                        <img src={imageUrl} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <span style={{ fontSize: '0.6rem', color: '#444', textAlign: 'center', padding: '1rem', fontWeight: 600 }}>{label}</span>
                                    )}
                                </div>
                                <div className="modal-image-label">
                                    <div className="modal-label-text">{label}</div>
                                    {subLabel && <div className="modal-label-sub">{subLabel}</div>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default VisualModal;
