import { useState } from 'react';
import Input from './Input';
import { Button } from './Button';
import emailjs from '@emailjs/browser';

type ContactModalProps = {
    onClose: () => void;
};

export default function ContactModal({ onClose }: ContactModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (submitStatus !== 'idle') setSubmitStatus('idle');
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (!serviceID || !templateID || !publicKey) {
            console.error('EmailJS environment variables are missing!');
            setSubmitStatus('error');
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus('idle');
        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('EmailJS SUCCESS!', response.status, response.text);
                setSubmitStatus('success');
                setTimeout(() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    onClose();
                }, 1500);
            })
            .catch((err) => {
                console.error('EmailJS FAILED...', err);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <h2 className="text-2xl font-heading text-highlight font-bold">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                    label="Name:"
                    name="name"
                    type="text"
                    placeholder="Gaius Julius Caesar..."
                    autoComplete="name"
                    value={name}
                    onChange={handleInputChange}
                />
                <Input
                    label="E-mail:"
                    name="email"
                    type="email"
                    placeholder="caesar@rome.gov.."
                    autoComplete="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <Input
                    label="Message:"
                    name="message"
                    as="textarea"
                    placeholder="Enter your message here..."
                    value={message}
                    onChange={handleInputChange}
                />

                <div className="flex flex-row justify-between items-center mt-6 pt-6 border-t-2 border-highlight">
                    <Button variant="project" size="md" type="submit" disabled={isSubmitting}>
                        <span className="inline-block px-4 py-2">
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </span>
                    </Button>
                    <div className="text-sm">
                        {submitStatus === 'success' && (
                            <p className="text-green-500">Message Sent!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-500">Failed to send. Try again.</p>
                        )}
                    </div>
                    <Button
                        onClick={onClose}
                        variant="secondary"
                        size="md"
                        type="button"
                        disabled={isSubmitting}
                    >
                        <span className="inline-block px-4 py-2">Close</span>
                    </Button>
                </div>
            </form>
        </>
    );
}
