
import React from 'react';
import { TFMStep } from '../types';

interface SidebarProps {
    steps: TFMStep[];
    currentStepId: number;
    onSelectStep: (id: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ steps, currentStepId, onSelectStep }) => {
    return (
        <aside className="w-full lg:w-80 h-full bg-white border-r border-slate-200 flex flex-col shadow-lg">
            <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-bold font-heading text-blue-700">Fases del TFM</h2>
                <p className="text-sm text-slate-500">Navega por las etapas</p>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
                <ul>
                    {steps.map((step) => (
                        <li key={step.id}>
                            <button
                                onClick={() => onSelectStep(step.id)}
                                className={`w-full text-left flex items-center p-3 my-1 rounded-lg transition-all duration-200 ${
                                    currentStepId === step.id
                                        ? 'bg-blue-100 text-blue-800 font-semibold shadow-sm'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                                }`}
                            >
                                <step.icon className="h-6 w-6 mr-3 flex-shrink-0 text-blue-600" />
                                <span className="flex-1">{step.title}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-slate-200 text-center">
                 <p className="text-xs text-slate-400">Creado para la excelencia académica.</p>
            </div>
        </aside>
    );
};
