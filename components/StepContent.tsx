
import React, { useState } from 'react';
import { TFMStep } from '../types';
import { getAITips } from '../services/geminiService';
import { SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface StepContentProps {
    step: TFMStep;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse [animation-delay:0.4s]"></div>
        <p className="text-slate-500 text-sm">Generando consejos...</p>
    </div>
);


const ContentCard: React.FC<{ title: string; points: string[]; icon?: React.ReactNode }> = ({ title, points, icon }) => (
     <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-bold font-heading text-slate-800">{title}</h3>
        </div>
        <ul className="space-y-3 text-slate-600 list-disc list-inside">
            {points.map((point, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
            ))}
        </ul>
    </div>
);


export const StepContent: React.FC<StepContentProps> = ({ step, onPrev, onNext, isFirst, isLast }) => {
    const [aiTips, setAiTips] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetAITips = async () => {
        setIsLoading(true);
        setError(null);
        setAiTips([]);
        try {
            const tips = await getAITips(step.content.aiPrompt);
            setAiTips(tips);
        } catch (err) {
            setError('Error al contactar la IA. Por favor, inténtalo de nuevo más tarde.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <article className="bg-transparent rounded-lg p-0">
            <div className="flex items-center space-x-4 mb-4">
                 <div className="p-3 bg-blue-100 rounded-full">
                    <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold font-heading text-slate-900">{step.title}</h2>
                    <p className="text-md text-slate-500">{step.subtitle}</p>
                </div>
            </div>
            
            <div className="prose prose-slate max-w-none prose-li:my-1 prose-p:my-3 mt-6">
                <p className="text-lg text-slate-700">{step.content.introduction}</p>
            </div>
            
            {step.content.keyPoints.map((block, index) => (
                <ContentCard key={index} title={block.title} points={block.details} />
            ))}

            {step.content.recommendations && step.content.recommendations.map((block, index) => (
                 <ContentCard key={`rec-${index}`} title={block.title} points={block.details} />
            ))}

            <div className="mt-8 bg-blue-50 border-2 border-dashed border-blue-200 p-6 rounded-xl text-center">
                <h3 className="text-lg font-semibold text-blue-800">¿Necesitas un impulso de creatividad?</h3>
                <p className="text-blue-700 mt-1 mb-4">Obtén consejos prácticos y personalizados de nuestra IA para esta sección.</p>
                <button
                    onClick={handleGetAITips}
                    disabled={isLoading}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                    <SparklesIcon />
                    <span className="ml-2">Generar Consejos con IA</span>
                </button>

                {isLoading && <div className="mt-4"><LoadingSpinner/></div>}
                {error && <p className="mt-4 text-red-600">{error}</p>}
                {aiTips.length > 0 && (
                    <div className="mt-6 text-left bg-white p-6 rounded-lg shadow-inner">
                        <h4 className="font-bold text-slate-800 mb-2">Aquí tienes algunas ideas:</h4>
                        <ul className="space-y-2 text-slate-600 list-disc list-inside">
                            {aiTips.map((tip, index) => <li key={index}>{tip}</li>)}
                        </ul>
                    </div>
                )}
            </div>

            <div className="mt-10 flex justify-between items-center">
                <button
                    onClick={onPrev}
                    disabled={isFirst}
                    className="inline-flex items-center px-4 py-2 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeftIcon />
                    <span className="ml-2">Anterior</span>
                </button>
                <button
                    onClick={onNext}
                    disabled={isLast}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                     <span className="mr-2">Siguiente</span>
                    <ChevronRightIcon />
                </button>
            </div>

        </article>
    );
};
