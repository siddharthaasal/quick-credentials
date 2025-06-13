import { useState } from "react";

export default function CopyComponent({ name, val }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(val);
        console.log(`${val} copied`);
        setCopied(true);
        setTimeout(() => setCopied(false), 500); // brief feedback
    };

    return (
        <div className="select-none relative group w-max cursor-pointer" onClick={handleCopy}>
            <p className="text-white hover:text-emerald-600 transition">{name}</p>

            {copied && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-600 text-white text-xs px-2 py-0.5 rounded shadow-sm">
                    Copied!
                </span>
            )}
        </div>
    );
}
