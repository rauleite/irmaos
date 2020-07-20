import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';

import useFabric from './useFabric';

import { constants, aspectRatio, useEventListener } from '../../../src/utils';

/**
 * Componentes como Web Elements, sempre devem ser importados dinamicamente:
 * ```
  const CardBusiness = dynamic(
    () => import('./Canvas/CardBusiness'),
    { ssr: false },
  );
  ```
 */
const CardBusiness = () => {
  const [area, setArea] = useState(
    /**
       - Aspect do cartão estilo americano 1.75
       - Desconto: 2 drawers e 2 padding (theme.spacing(3) = 24)
       - Info: Calcular ratio => Width / Height
      */
    () => aspectRatio(
      document.documentElement.clientWidth,
      1.75,
      (constants.DRAWER_WIDTH + 24) * 2,
    ),
  );
  // const documentWidth = document.documentElement.offsetWidth;
  // const area = aspectRatio(documentWidth, 1.75, (constants.DRAWER_WIDTH + 24) * 2);

  // const divRef = useRef(null);

  const handleOnResize = useCallback((e) => {
    // NOTE: This is for the sake of demonstration purpose only.
    // Doing this will greatly affect performance.
    console.log('e.target', e.target);
  }, [setArea]);

  useEventListener('resize', handleOnResize);

  // useEffect(() => {
  //   const div = divRef.current;
  //   // subscribe event
  //   div.addEventListener('resize', handleOnResize);
  //   return () => {
  //     // unsubscribe event
  //     div.removeEventListener('resize', handleOnResize);
  //   };
  // }, []);

  const fabricRef = useFabric((canvas) => {
    console.log('canvas', canvas);
    // if (divRef.current) {
    // console.log('div', divRef.current.clientWidth);
    // setArea(divRef.current.clientWidth);
  });
  // });

  return (
    <div
      // ref={divRef}
      style={{
        width: '100%',
        height: '100%',
        margin: 0,
        // border: 0,
        overflow: 'hidden', /*  Disable scrollbars */
        display: 'block', /* No floating content on sides */
        border: '1px solid red',
      }}
    >
      <canvas
        ref={fabricRef}
        width={area.width}
        height={area.height}
        style={{
          // border: '1px solid red', position: 'absolute', left: 0, top: 0,
          position: 'absolute', left: 0, top: 0,
        }}
      >
        Desculpe, seu navegador não suporta esse recurso.

      </canvas>
    </div>
  );
};

export default CardBusiness;
