import { useEffect, useRef } from 'react';

// Hook
export default (eventName, handler, element) => {
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
      const isSupported = element && element.current && element.current.addEventListener;
      if (!isSupported) return;
      console.log('useEffect -> element', element);

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);
      const elementCurrent = element.current;
      // Add event listener
      elementCurrent.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        elementCurrent.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element], // Re-run if eventName or element changes
  );
};
