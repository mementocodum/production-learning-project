import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = ({ children, element = document.body }: PortalProps) => (
    createPortal(children, element)
);
