"use client"

import React from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { modal } from "./modal.styles"


type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  originPoint: { top: number; left: number }
  variant?: "default" | "hologram"
}


export default function Modal({ isOpen, onClose, children, originPoint, variant="default" }: ModalProps) {
  const [isMounted, setIsMounted] = React.useState(false)
  const { backdrop, content } = modal({ style: variant });
  React.useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted) { return null }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          className={backdrop()}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={content()}
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