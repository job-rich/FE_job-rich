"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  elementId?: string;
}

export default function Portal({
  children,
  elementId = "portal",
}: PortalProps) {
  const [isCSR, setIsCSR] = useState(false);

  if (typeof window === "undefined") {
    return null;
  }
  useEffect(() => {
    setIsCSR(true);
  }, []);

  const element = document.getElementById(elementId) as Element;

  return createPortal(children, element);
}
