import React, { useState } from 'react';
import { cinematicDataset } from '../data/dataset';
import VisualModal from './VisualModal';
import PromptOutput from './PromptOutput';

const PromptBuilder = () => {
    const [selections, setSelections] = useState({
        subjectAction: '',
        environment: '',
        stylePrompt: '',
        shotSize: '',
        angleElevation: '',
        viewpoint: '',
        composition: '',
        perspective: '',
        aspectRatio: '16:9',
        lightingSource: '',
        lightingStyle: '',
        atmosphere: '',
        timeOfDay: '',
        weather: '',
        cameraBody: '',
        lensType: '',
        focalLength: '',
        aperture: '',
        filmStock: '',
        filter: '',
        depthLayers: '',
        lookFeel: '',
    });

    const [lookFeelMode, setLookFeelMode] = useState('none'); // 'none', 'movies', 'director'
    const [modalType, setModalType] = useState(null);

    const handleSelection = (key, value) => {
        setSelections(prev => ({ ...prev, [key]: value }));
    };

    const handleLookFeelModeChange = (mode) => {
        setLookFeelMode(mode);
        if (mode === 'none') {
            handleSelection('lookFeel', '');
        } else if (mode === 'movies') {
            setModalType('movies');
        } else if (mode === 'director') {
            setModalType('directors');
        }
    };

    const generateFinalPrompt = () => {
        const {
            subjectAction, environment, stylePrompt, shotSize, angleElevation,
            viewpoint, composition, perspective, aspectRatio, lightingSource,
            lightingStyle, atmosphere, timeOfDay, weather, cameraBody,
            lensType, focalLength, aperture, filmStock, filter, depthLayers, lookFeel
        } = selections;

        const parts = [];

        // 1. Core Scene
        if (subjectAction || environment || stylePrompt) {
            let core = "";
            if (stylePrompt) core += `${stylePrompt} scene of `;
            else core += "Cinematic scene of ";

            if (subjectAction) core += `a ${subjectAction}`;
            else core += "a cinematic subject";

            if (environment) core += ` set in ${environment}`;
            parts.push(core);
        } else {
            parts.push("Cinematic scene");
        }

        // 2. Composition & Framing
        if (shotSize) parts.push(shotSize);
        if (angleElevation) parts.push(angleElevation);
        if (viewpoint && viewpoint !== 'Unspecified') parts.push(`${viewpoint} View`);
        if (composition && composition !== 'Standard') parts.push(`composed using ${composition}`);

        // 3. Perspective & Depth
        if (perspective && perspective !== 'None') parts.push(`${perspective} Perspective`);
        if (depthLayers && depthLayers !== 'None') parts.push(`with ${depthLayers}`);

        // 4. Camera & Technicals
        if (cameraBody && cameraBody !== 'Default') parts.push(`captured with ${cameraBody}`);
        if (focalLength && focalLength !== 'None') parts.push(focalLength);
        if (aperture && aperture !== 'None') parts.push(`aperture ${aperture}`);
        if (lensType && lensType !== 'Unspecified') parts.push(lensType);
        if (filmStock && filmStock !== 'Modern Digital') parts.push(`${filmStock} film`);
        if (filter && filter !== 'None') parts.push(`with ${filter} filter`);

        // 5. Lighting & Atmosphere
        if (lightingSource && lightingSource !== 'Unspecified') parts.push(lightingSource);
        if (lightingStyle && lightingStyle !== 'Unspecified') parts.push(lightingStyle);
        if (atmosphere && atmosphere !== 'Unspecified') parts.push(`${atmosphere} mood`);
        if (timeOfDay && timeOfDay !== 'None') parts.push(`during ${timeOfDay}`);
        if (weather && weather !== 'None') parts.push(`${weather} weather`);

        // 6. Look & Feel (Movies/Directors)
        if (lookFeelMode !== 'none' && lookFeel) {
            if (lookFeelMode === 'movies') {
                parts.push(`inspired by the film ${lookFeel}`);
            } else if (lookFeelMode === 'director') {
                parts.push(`in the style of ${lookFeel}`);
            }
        }

        // 7. Meta parameters
        if (aspectRatio) parts.push(`--ar ${aspectRatio}`);

        return parts.filter(p => p).join(', ');
    };

    return (
        <div className="main-layout">
            {/* Sidebar - Directorial Controls */}
            <aside className="sidebar">
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', background: '#181818' }}>
                    <div className="logo" style={{ fontSize: '1rem' }}>CREATE MODE</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>BUILD A FRESH CINEMATIC SCENE</div>
                </div>

                {/* 1. Core Concepts */}
                <div className="sidebar-section">
                    <div className="section-title">Core Concepts</div>
                    <div className="control-group" style={{ marginBottom: '1rem' }}>
                        <label className="input-label">Subject & Action</label>
                        <textarea
                            className="text-input-area"
                            placeholder="e.g., A lone detective standing under a streetlamp"
                            value={selections.subjectAction}
                            onChange={(e) => handleSelection('subjectAction', e.target.value)}
                        />
                    </div>
                    <div className="control-group" style={{ marginBottom: '1rem' }}>
                        <label className="input-label">Environment</label>
                        <input
                            type="text"
                            className="text-input-area"
                            style={{ minHeight: 'auto' }}
                            placeholder="e.g., Rain-soaked Noir City"
                            value={selections.environment}
                            onChange={(e) => handleSelection('environment', e.target.value)}
                        />
                    </div>
                    <div className="control-group">
                        <label className="input-label">Style Prompt</label>
                        <select
                            className="custom-select"
                            style={{ width: '100%' }}
                            value={selections.stylePrompt}
                            onChange={(e) => handleSelection('stylePrompt', e.target.value)}
                        >
                            <option value="">Default Cinematic</option>
                            {cinematicDataset.stylePrompt.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                    </div>
                </div>

                {/* 2. Composition & Framing */}
                <div className="sidebar-section">
                    <div className="section-title">Composition & Framing</div>
                    <div className="visual-control-grid">
                        <div className="visual-item" onClick={() => setModalType('shotSize')}>
                            <span className="visual-label">Shot Size</span>
                            <span className="visual-value">{selections.shotSize || 'Default'}</span>
                        </div>
                        <div className="visual-item" onClick={() => setModalType('angleElevation')}>
                            <span className="visual-label">Angle</span>
                            <span className="visual-value">{selections.angleElevation || 'Eye Level'}</span>
                        </div>
                        <div className="visual-item" onClick={() => setModalType('viewpoint')}>
                            <span className="visual-label">Viewpoint</span>
                            <span className="visual-value">{selections.viewpoint || 'Front'}</span>
                        </div>
                        <div className="visual-item" onClick={() => setModalType('composition')}>
                            <span className="visual-label">Composition</span>
                            <span className="visual-value">{selections.composition || 'Standard'}</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <div className="input-label" style={{ marginBottom: '0.5rem' }}>Aspect Ratio</div>
                        <select
                            className="custom-select"
                            style={{ width: '100%' }}
                            value={selections.aspectRatio}
                            onChange={(e) => handleSelection('aspectRatio', e.target.value)}
                        >
                            {cinematicDataset.aspectRatio.map(ar => <option key={ar} value={ar}>{ar}</option>)}
                        </select>
                    </div>
                </div>

                {/* 3. Look & Feel (Categorized) */}
                <div className="sidebar-section">
                    <div className="section-title">Look & Feel</div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                        {['none', 'movies', 'director'].map(mode => (
                            <button
                                key={mode}
                                className={`copy-btn ${lookFeelMode === mode ? '' : 'inactive'}`}
                                style={{
                                    flex: 1,
                                    padding: '0.5rem',
                                    fontSize: '0.6rem',
                                    background: lookFeelMode === mode ? 'var(--accent-color)' : '#222',
                                    marginTop: 0
                                }}
                                onClick={() => handleLookFeelModeChange(mode)}
                            >
                                {mode.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    {lookFeelMode !== 'none' && (
                        <div className="visual-item" style={{ width: '100%' }} onClick={() => setModalType(lookFeelMode === 'movies' ? 'movies' : 'directors')}>
                            <span className="visual-label">{lookFeelMode === 'movies' ? 'Movie Selection' : 'Director Style'}</span>
                            <span className="visual-value">{selections.lookFeel || 'Choose...'}</span>
                        </div>
                    )}
                </div>

                {/* 4. Perspective & Depth */}
                <div className="sidebar-section">
                    <div className="section-title">Perspective & Depth</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        <div className="control-group">
                            <label className="input-label">Perspective</label>
                            <select className="custom-select" value={selections.perspective} onChange={(e) => handleSelection('perspective', e.target.value)}>
                                <option value="">None</option>
                                {cinematicDataset.perspective.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div className="control-group">
                            <label className="input-label">Depth/Layers</label>
                            <select className="custom-select" value={selections.depthLayers} onChange={(e) => handleSelection('depthLayers', e.target.value)}>
                                <option value="">None</option>
                                {cinematicDataset.depthLayers.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* 5. Lighting & Atmosphere */}
                <div className="sidebar-section">
                    <div className="section-title">Lighting & Atmosphere</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                        <div className="control-group">
                            <label className="input-label">Source</label>
                            <select className="custom-select" value={selections.lightingSource} onChange={(e) => handleSelection('lightingSource', e.target.value)}>
                                <option value="">Unspecified</option>
                                {cinematicDataset.lightingSource.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div className="control-group">
                            <label className="input-label">Style</label>
                            <select className="custom-select" value={selections.lightingStyle} onChange={(e) => handleSelection('lightingStyle', e.target.value)}>
                                <option value="">Unspecified</option>
                                {cinematicDataset.lightingStyle.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                        <div className="control-group">
                            <label className="input-label">Time of Day</label>
                            <select className="custom-select" value={selections.timeOfDay} onChange={(e) => handleSelection('timeOfDay', e.target.value)}>
                                <option value="">None</option>
                                {cinematicDataset.timeOfDay.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div className="control-group">
                            <label className="input-label">Weather</label>
                            <select className="custom-select" value={selections.weather} onChange={(e) => handleSelection('weather', e.target.value)}>
                                <option value="">None</option>
                                {cinematicDataset.weather.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="input-label">Atmosphere</label>
                        <select className="custom-select" value={selections.atmosphere} onChange={(e) => handleSelection('atmosphere', e.target.value)}>
                            <option value="">Unspecified</option>
                            {cinematicDataset.atmosphere.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                    </div>
                </div>

                {/* 6. Camera & Lens */}
                <div className="sidebar-section">
                    <div className="section-title">Camera & Technicals</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                        <div className="control-group">
                            <label className="input-label">Body</label>
                            <select className="custom-select" value={selections.cameraBody} onChange={(e) => handleSelection('cameraBody', e.target.value)}>
                                <option value="">Default</option>
                                {cinematicDataset.cameraBodies.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div className="control-group">
                            <label className="input-label">Lens Type</label>
                            <select className="custom-select" value={selections.lensType} onChange={(e) => handleSelection('lensType', e.target.value)}>
                                <option value="">Unspecified</option>
                                {cinematicDataset.lensType.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                        <div className="control-group">
                            <label className="input-label">Focal Length</label>
                            <select className="custom-select" value={selections.focalLength} onChange={(e) => handleSelection('focalLength', e.target.value)}>
                                <option value="">None</option>
                                {cinematicDataset.focalLength.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div className="control-group">
                            <label className="input-label">Aperture</label>
                            <select className="custom-select" value={selections.aperture} onChange={(e) => handleSelection('aperture', e.target.value)}>
                                <option value="">None</option>
                                {cinematicDataset.aperture.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="control-group" style={{ marginBottom: '1rem' }}>
                        <label className="input-label">Film Stock</label>
                        <select className="custom-select" value={selections.filmStock} onChange={(e) => handleSelection('filmStock', e.target.value)}>
                            <option value="">Modern Digital</option>
                            {cinematicDataset.filmStock.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                    </div>
                    <div className="control-group">
                        <label className="input-label">Filter</label>
                        <select className="custom-select" style={{ width: '100%' }} value={selections.filter} onChange={(e) => handleSelection('filter', e.target.value)}>
                            <option value="">None</option>
                            {cinematicDataset.filter.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                    </div>
                </div>

                <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.3, fontSize: '0.6rem' }}>
                    SCROLL FOR MORE PARAMETERS
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="content-area">
                <div className="preview-panel">
                    <PromptOutput finalPrompt={generateFinalPrompt()} />

                    <div className="empty-state" style={{ marginTop: '2rem', borderStyle: 'solid', background: 'rgba(255,255,255,0.01)' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.2 }}>🎬</div>
                            <div style={{ maxWidth: '400px' }}>Your prompt will be generated in real-time as you select cinematic parameters from the sidebar.</div>
                        </div>
                    </div>
                </div>

                <footer className="top-nav" style={{ height: '40px', borderTop: '1px solid var(--border-color)', borderBottom: 'none', background: 'transparent' }}>
                    <div style={{ fontSize: '0.6rem', color: '#444' }}>CINEMATIC PROMPT BUILDER | DIRECTORIAL CONTROL SYSTEM</div>
                </footer>
            </main>

            {/* Modals for high-interactivity choices */}
            <VisualModal
                title="Shot Size"
                isOpen={modalType === 'shotSize'}
                options={cinematicDataset.shotSize}
                onClose={() => setModalType(null)}
                onSelect={(val) => handleSelection('shotSize', val)}
            />
            <VisualModal
                title="Angle / Elevation"
                isOpen={modalType === 'angleElevation'}
                options={cinematicDataset.angleElevation}
                onClose={() => setModalType(null)}
                onSelect={(val) => handleSelection('angleElevation', val)}
            />
            <VisualModal
                title="Viewpoint"
                isOpen={modalType === 'viewpoint'}
                options={cinematicDataset.viewpoint}
                onClose={() => setModalType(null)}
                onSelect={(val) => handleSelection('viewpoint', val)}
            />
            <VisualModal
                title="Composition"
                isOpen={modalType === 'composition'}
                options={cinematicDataset.compositionSystem}
                onClose={() => setModalType(null)}
                onSelect={(val) => handleSelection('composition', val)}
            />
            <VisualModal
                title="Movies"
                isOpen={modalType === 'movies'}
                options={cinematicDataset.movies}
                onClose={() => setModalType(null)}
                onSelect={(val) => handleSelection('lookFeel', val)}
            />
            <VisualModal
                title="Directors"
                isOpen={modalType === 'directors'}
                options={cinematicDataset.directors}
                onClose={() => setModalType(null)}
                onSelect={(val) => handleSelection('lookFeel', val)}
            />
        </div>
    );
};

export default PromptBuilder;
