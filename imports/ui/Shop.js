import ShopifyBuy from 'shopify-buy';

export const shopClient = ShopifyBuy.buildClient({
  accessToken: '6d2556c3088abffe35cec49d0c64637a',
  domain: 'shakydice.myshopify.com',
  appId: '6',
});

export function generateSelectors(product) {
  var elements = product.options.map(function(option) {
    return '<select name="' + option.name + '">' + option.values.map(function(value) {
      return '<option value="' + value + '">' + value + '</option>';
    }) + '</select>';
  });

  return elements;
}

// shopClient.fetchProduct('10558455949').then(product => {
//   const html =
//     `<img src="${product.selectedVariantImage.src}">` +
//     `<h1>${product.title}</h1>` +
//     `<a href="${product.selectedVariant.checkoutLink}">Buy Now!</a>`;
//
//     document.querySelector('#BuyButtonContainer').innerHTML = html;
// })

//
// export function fetchAllProducts() {
//   return new Promise((resolve, reject) => {
//     shopClient.fetchAllProducts()
//       .then((data) => {
//         console.log('shopClient.fetchAllProducts', data);
//         resolve(data);
//       }).catch((error) => {
//         console.error(new Error('Fetching products error!'));
//         reject(error);
//       });
//   });
// }
