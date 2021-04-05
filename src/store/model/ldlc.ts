import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Ldlc: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.stock',
      text: ['stock'],
    },
    maxPrice: {
      container: '.price .price',
      euroFormat: true,
    },
    outOfStock: {
      container: '.stock',
      text: ['rupture'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00317660.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369303.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369299.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369299.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369299.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369072.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00376208.html',
    },
    {
      brand: 'inno3d',
      model: 'twin x2',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368690.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369094.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369150.html',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369298.html',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00386334.html',
    },
    {
      brand: 'kfa2',
      model: 'sg',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00396037.html',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00375625.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368844.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368506.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00390466.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368789.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00398370.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00391682.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00376207.html',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368691.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369158.html',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369268.html',
    },
    {
      brand: 'inno3d',
      model: 'ichill frostbite',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00391624.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra hybrid',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00398046.html',
    },
    {
      brand: 'kfa2',
      model: 'sg',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368931.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00375448.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00375431.html',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00369265.html',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00390727.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra hybrid',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00398045.html',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368692.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00368579.html',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00375644.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00385535.html',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00386332.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://www.ldlc.com/fr-be/fiche/PB00398373.html',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.pdt-desc',
      sitePrefix: 'https://www.ldlc.com',
      titleSelector: '.title-3',
      urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: 'rx6800',
        url:
          'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19339.html'
      },
      {
        series: 'rx6800xt',
        url:
          'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19340.html'
      },
      {
        series: 'rx6900xt',
        url:
          'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19367.html'
      },
      {
        series: '3060',
        url:
          'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19509.html'
      },
      {
        series: '3060ti',
        url:
          'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19365.html'
      },
      {
        series: '3070',
        url:
          'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19184.html'
      },
      {
        series: '3080',
        url:
          'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19183.html'
      },
      {
        series: '3090',
        url:
          'https://www.ldlc.com/informatique/pieces-informatique/carte-graphique-interne/c4684/+fv121-19185.html'
      },
    ],
  },
  name: 'ldlc',
};
