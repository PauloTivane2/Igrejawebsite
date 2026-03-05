"use client";

import { useEffect, useState } from "react";
import { toast as sonnerToast } from "sonner";

export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
}

export function useToast() {
  const toast = ({ title, description, variant = "default" }: ToastOptions) => {
    if (variant === "destructive") {
      sonnerToast.error(title, { description });
    } else if (variant === "success") {
      sonnerToast.success(title, { description });
    } else {
      sonnerToast(title, { description });
    }
  };

  return { toast };
}
