export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const isServer = () => typeof window === 'undefined';

export const loadScript = async ({
  src, integrity, instanceTest, async = true, crossOrigin = 'anonymous',
}) => {
  if (isServer()) return;
  return new Promise((resolve) => {
    if (instanceTest) {
      console.log('obj já carregado');
      return resolve();
    }
    const tag = document.createElement('script');
    tag.src = src;
    if (integrity) {
      tag.integrity = integrity;
    }
    tag.async = async;
    tag.crossOrigin = crossOrigin;
    document.body.appendChild(tag);
    tag.onload = () => resolve();
  });
};

export const milliToPixel = ({ width, height }) => {
  const pixel = 3.7795275591;
  return {
    width: width * pixel,
    height: height * pixel,
  };
};
