(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Some gems have hidden qualities; dodeca is one',
      images: {
        full: '/images/gem-01.gif'
      },
      canPurchase: false,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'A five-sided gem',
      images: {
        full: '/images/gem-02.gif'
      },
      canPurchase: true,
      soldOut: false,
    }
  ];


})();
