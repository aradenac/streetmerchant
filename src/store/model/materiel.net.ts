import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const MaterielDotNet: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.product-availability',
      text: ['stock'],
    },
    maxPrice: {
      container: '.o-product__price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.product-availability',
      text: ['rupture'],
    },
  },
  links: [],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.c-products-list__item',
      sitePrefix: 'https://www.materiel.net',
      titleSelector: '.c-product__meta',
      urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: 'rx6800',
        url:
          'https://www.materiel.net/carte-graphique/l426/+fv121-19339/'
      },
      {
        series: 'rx6800xt',
        url:
          'https://www.materiel.net/carte-graphique/l426/+fv121-19340/'
      },
      {
        series: 'rx6900xt',
        url:
          'https://www.materiel.net/carte-graphique/l426/+fv121-19367/'
      },
      {
        series: '3060',
        url:
          'https://www.materiel.net/carte-graphique/l426/+fv121-19509/'
      },
      {
        series: '3060ti',
        url:
          'https://www.materiel.net/carte-graphique/l426/+fv121-19365/'
      },
      {
        series: '3070',
        url:
          'https://www.materiel.net/carte-graphique/l426/+fv121-19184/'
      },
      {
        series: '3080',
        url:
          'https://www.materiel.net/carte-graphique/l426/+fv121-19183/'
      },
      {
        series: '3090',
        url:
          'https://www.materiel.net/carte-graphique/l426/+fv121-19185/'
      },
    ],
  },
  name: 'materiel.net',
};
