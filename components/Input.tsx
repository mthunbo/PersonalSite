'use client';

import React from 'react';

type InputProps = {
    label: string;
    name: string;
    as?: 'input' | 'textarea';
} & React.ComponentPropsWithoutRef<'input'> &
    React.ComponentPropsWithoutRef<'textarea'>;

export default function Input({ label, name, as = 'input', ...props }: InputProps) {
    const commonClasses =
        'mt-1 block w-full rounded-md bg-background border-border text-text shadow-sm focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50 font-body';

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-body text-highlight font-bold">
                {label}
            </label>

            {as === 'textarea' ? (
                <textarea id={name} name={name} rows={4} className={commonClasses} {...props} />
            ) : (
                <input id={name} name={name} className={commonClasses} {...props} />
            )}
        </div>
    );
}
