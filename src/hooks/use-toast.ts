"use client";

import { useEffect, useState } from "react";

export function useToast() {
    const [toasts, setToasts] = useState<
        { id: string; message: string; type: "success" | "error" | "info" }[]
    >([]);

    const addToast = (
        message: string,
        type: "success" | "error" | "info" = "info"
    ) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    useEffect(() => {
        if (toasts.length > 0) {
            const timer = setTimeout(() => {
                setToasts((prev) => prev.slice(1));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [toasts]);

    return { toasts, addToast, removeToast };
}
