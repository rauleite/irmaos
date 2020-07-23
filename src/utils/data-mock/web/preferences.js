import card from './card';
/**
 * Enum for Zoom
 * @readonly
 * @enum {{name: string, hex: string}}
 */
const Zoom = Object.freeze({
  10: 10,
  25: 25,
  50: 50,
  75: 75,
  100: 100,
  125: 125,
  150: 150,
  200: 200,
  300: 300,
  fit: 'fit',
  fill: 'fill',
});

export default {
  id: 1,
  cardType: card.types.cardBusiness,
  screen: {
    zoom: Zoom[100],
  },
};
