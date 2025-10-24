// FIX: Import React to resolve the 'Cannot find namespace 'React'' error.
import React from 'react';

export interface TFMStep {
    id: number;
    title: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    content: {
        introduction: string;
        keyPoints: ContentBlock[];
        recommendations?: ContentBlock[];
        aiPrompt: string;
    };
}

export interface ContentBlock {
    title: string;
    details: string[];
}
