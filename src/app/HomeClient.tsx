'use client';

import { useEffect, useState } from 'react';

export default function HomeClient() {
    const [greeting, setGreeting] = useState('Welcome to DigiCAP.tv!');
    const [showAskDropdown, setShowAskDropdown] = useState(false);
    const [selectedModel, setSelectedModel] = useState('Upthere AI');
    
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting('Good morning');
        } else if (hour < 17) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }, []);

    const aiModels = [
        { name: 'Upthere AI', icon: '🧠' },
        { name: 'OpenAI GPT-4.1', icon: '🌀' },
        { name: 'Anthropic Claude Sonnet 4', icon: '🌟' },
        { name: 'Anthropic Claude Opus 4', icon: '🌟' },
        { name: 'Google Gemini 2.5 Flash', icon: '🔥' },
        { name: 'Google Gemini 2.5 Pro', icon: '💎' }
    ];

    return (
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-6 px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-medium">{greeting}</h1>

            <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
                <textarea
                    placeholder="Ask or find anything about NextGEN broadcasting and DigiCaster..."
                    className="w-full min-h-[6rem] max-h-[10rem] p-4 pb-14 text-base border border-gray-300 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Ask dropdown inside bottom left */}
                <div className="absolute bottom-4 left-4">
                    <div className="relative">
                        <button 
                            onClick={() => setShowAskDropdown(!showAskDropdown)}
                            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                        >
                            Ask ▾
                        </button>
                        
                        {showAskDropdown && (
                            <div className="absolute top-full mt-2 left-0 w-80 max-w-[calc(100vw-2rem)] bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                <div className="p-3 border-b border-gray-200">
                                    <p className="text-sm text-gray-600 font-medium">Get answers about your workspace</p>
                                </div>
                                <div className="p-3 border-b border-gray-200">
                                    <p className="text-sm text-gray-600 font-medium mb-2">Chat directly with popular models</p>
                                    <div className="space-y-1">
                                        {aiModels.map((model) => (
                                            <button
                                                key={model.name}
                                                onClick={() => {
                                                    setSelectedModel(model.name);
                                                    setShowAskDropdown(false);
                                                }}
                                                className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-md hover:bg-gray-50 ${
                                                    selectedModel === model.name ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                                                }`}
                                            >
                                                <span className="text-lg">{model.icon}</span>
                                                <span className="text-sm">{model.name}</span>
                                                {selectedModel === model.name && (
                                                    <span className="ml-auto text-blue-600">✓</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Submit button inside bottom right */}
                <div className="absolute bottom-4 right-4">
                    <button className="px-2 py-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                        ↑
                    </button>
                </div>
            </div>
        </div>
    );
}