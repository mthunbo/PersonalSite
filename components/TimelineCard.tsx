import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

type TimelineProps = {
    date: string;
    title: string;
    description: string;
    direction?: 'left' | 'right';
    isOpen: boolean;
    onCardClick: () => void;
};

export default function TimelineCard({
    date,
    title,
    description,
    direction = 'right',
    isOpen,
    onCardClick,
}: TimelineProps) {
    const isLeft = direction === 'left';
    const containerClasses = isLeft
        ? 'md:mr-auto md:pr-8 text-right'
        : 'md:ml-auto md:pl-8 text-left';
    const pointerClasses = isLeft
        ? 'right-0 translate-x-1/2 border-t-2 border-r-2'
        : 'left-0 -translate-x-1/2 border-b-2 border-l-2';

    return (
        <div className={`relative w-full md:w-1/2 ${containerClasses}`}>
            <div
                className="relative bg-primary rounded-lg p-6 border-highlight border-2 cursor-pointer"
                onClick={onCardClick}
            >
                <div
                    className={`absolute top-1 h-4 w-4 rotate-45 border-highlight bg-primary ${pointerClasses}`}
                ></div>
                <p className="font-heading text-sm text-highlight">{date}</p>

                <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-heading text-xl text-text">{title}</h3>
                    <FiChevronDown
                        className={`text-highlight transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        size={24}
                    />
                </div>

                {isOpen && (
                    <motion.p
                        className="mt-4 font-body text-text-muted"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </div>
    );
}
