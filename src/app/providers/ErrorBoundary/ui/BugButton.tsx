import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const toggle = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);
    return (
        <Button onClick={toggle}>
            cause error
        </Button>
    );
};
