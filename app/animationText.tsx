'use client';

import { useEffect, useState } from 'react';

const roles: string[] = [
    'Software Developer',
    'UI/UX Developer',
    'Full Stack Developer',
];

export default function StableTypewriter() {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Fixed width → prevents movement
    const maxLength = Math.max(...roles.map(r => r.length));

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && charIndex < current.length) {
            // TYPE: left → right
            timeout = setTimeout(() => {
                setText(current.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);

        } else if (!isDeleting && charIndex === current.length) {
            // PAUSE before deleting (NO blinking)
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1200);

        } else if (isDeleting && charIndex > 0) {
            // DELETE: right → left
            timeout = setTimeout(() => {
                setText(current.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 60);

        } else if (isDeleting && charIndex === 0) {
            // NEXT word
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <h1 className="flex items-center whitespace-nowrap text-5xl font-semibold">
            {/* Constant text */}
            <span className="mr-5">I am a</span>

            {/* Stable animated text */}
            <span
                className="inline-block text-left font-mono bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent"
                style={{ width: `${maxLength}ch` }}
            >
                {text}
            </span>
        </h1>
    );
}
