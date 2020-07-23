export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const isServer = () => typeof window === 'undefined';

export const milliToPixel = ({ width, height }) => {
  const pixel = 3.7795275591;
  return {
    width: width * pixel,
    height: height * pixel,
  };
};
