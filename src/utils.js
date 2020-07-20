import {
  useState, useRef, useEffect, useCallback,
} from 'react';

export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const isServer = () => typeof window === 'undefined';

const aspectBusinessCard = 1.75;

export const aspectRatio = (width, aspect = aspectBusinessCard, desconto = 0) => {
  const widthComDesconto = width - desconto;
  console.log('aspectRatio -> width', width);
  console.log('aspectRatio -> widthComDesconto', widthComDesconto);
  return {
    width: widthComDesconto,
    height: widthComDesconto / aspect,
  };
};

export const constants = {
  DRAWER_WIDTH: 300,
};

// Hook
export const useEventListener = (eventName, handler, element = window) => {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element], // Re-run if eventName or element changes
  );
};
