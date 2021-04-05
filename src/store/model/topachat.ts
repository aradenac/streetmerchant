import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const TopAchat: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'input.cart.button[value="Ajouter au panier"]',
      text: [''],
    },
    maxPrice: {
      container: 'span.priceFinal.fp44',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in11019393.html',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.grille-produit',
      sitePrefix: 'https://www.topachat.com',
      titleSelector: '.libelle',
      urlSelector: 'a[href]',
    }),
    urls: [
      {
        series: 'rx6800',
        url:
          'https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11559.html'
      },
      {
        series: 'rx6800xt',
        url:
          'https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11558.html'
      },
      {
        series: 'rx6900xt',
        url:
          'https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11586.html'
      },
      {
        series: '3060',
        url:
          'https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11733.html'
      },
      {
        series: '3060ti',
        url:
          'https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11575.html'
      },
      {
        series: '3070',
        url:
          'https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11447.html'
      },
      {
        series: '3080',
        url:
          'https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11445.html'
      },
      {
        series: '3090',
        url:
          'https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11446.html'
      },
    ],
  },
  name: 'topachat',
};
