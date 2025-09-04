"use client"

import React from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  originPoint: { top: number; left: number }
};

export default function Modal({ isOpen, onClose, children, originPoint }: ModalProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted) { return null }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center z-[100]"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-primary-dark border-highlight border-2 p-8 rounded-lg shadow-xl max-w-lg w-full m-4"
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.2,
              x: originPoint.left - window.innerWidth / 2,
              y: originPoint.top - window.innerHeight / 2,
            }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.1,
              x: originPoint.left - window.innerWidth / 2,
              y: originPoint.top - window.innerHeight / 2,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root")!
  );
}