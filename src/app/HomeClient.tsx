'use client';

import { useEffect, useState } from 'react';

export default function HomeClient() {
    const [greeting, setGreeting] = useState('Welcome to DigiCAP.tv!');
    
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

    return (

        <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-6">
            <h1 className="text-2xl sm:text-3xl text-center font-medium">{greeting}</h1>

            <div className="relative w-1/2">
                <textarea
                    placeholder="Ask or find anything from your workspace..."
                    className="w-full min-h-[6rem] max-h-[10rem] p-4 pb-14 text-base border border-gray-300 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Ask dropdown inside bottom left */}
                <div className="absolute bottom-4 left-4">
                    <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                    Ask ▾
                    </button>
                </div>

                {/* Sources dropdown inside bottom right */}
                <div className="absolute bottom-4 right-4">
                    <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                        All sources ▾
                    </button>
                </div>
            </div>
        </div>

    );
}