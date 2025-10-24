
import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { StepContent } from './components/StepContent';
import { ProgressBar } from './components/ProgressBar';
import { tfmSteps } from './data/tfmSteps';
import { TFMStep } from './types';
import { MenuIcon, XIcon } from './components/Icons';

const App: React.FC = () => {
    const [currentStepId, setCurrentStepId] = useState<number>(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const currentStep = useMemo((): TFMStep => {
        return tfmSteps.find(step => step.id === currentStepId) ?? tfmSteps[0];
    }, [currentStepId]);

    const currentStepIndex = useMemo(() => {
        return tfmSteps.findIndex(step => step.id === currentStepId);
    }, [currentStepId]);

    const progress = useMemo(() => {
        return ((currentStepIndex + 1) / tfmSteps.length) * 100;
    }, [currentStepIndex]);

    const handleSelectStep = (id: number) => {
        setCurrentStepId(id);
        setIsSidebarOpen(false); // Close sidebar on selection
    };

    const goToNextStep = () => {
        if (currentStepIndex < tfmSteps.length - 1) {
            setCurrentStepId(tfmSteps[currentStepIndex + 1].id);
        }
    };

    const goToPrevStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepId(tfmSteps[currentStepIndex - 1].id);
        }
    };


    return (
        <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
            <div className="flex h-screen">
                {/* Mobile Sidebar Toggle */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="fixed top-4 left-4 z-30 p-2 bg-white rounded-full shadow-lg lg:hidden"
                    aria-label="Toggle menu"
                >
                    {isSidebarOpen ? <XIcon /> : <MenuIcon />}
                </button>

                {/* Sidebar */}
                <div className={`fixed inset-y-0 left-0 z-20 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-80`}>
                     <Sidebar
                        steps={tfmSteps}
                        currentStepId={currentStepId}
                        onSelectStep={handleSelectStep}
                    />
                </div>
                

                {/* Main Content */}
                <main className="flex-1 flex flex-col overflow-y-auto">
                    <div className="p-4 sm:p-6 lg:p-10 flex-1">
                        <div className="max-w-4xl mx-auto">
                            <header className="mb-8 pt-10 lg:pt-0">
                                <h1 className="text-4xl font-bold font-heading text-slate-900">Guía Interactiva para tu TFM</h1>
                                <p className="mt-2 text-lg text-slate-600">Sigue estos pasos para crear un trabajo final de máster excepcional.</p>
                                <ProgressBar progress={progress} />
                            </header>

                            <StepContent 
                                step={currentStep} 
                                onNext={goToNextStep}
                                onPrev={goToPrevStep}
                                isFirst={currentStepIndex === 0}
                                isLast={currentStepIndex === tfmSteps.length - 1}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
