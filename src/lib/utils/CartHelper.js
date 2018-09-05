const CART_KEY = 'TEEPUBLIC_CART_ITEMS';
export default class CartHelper {
  addToCart(
    design,
    sku,
    storeId,
    affiliateId,
    affiliateNetworkId,
    callback,
    quantity = 1
  ) {
    const addedCartItem = {
      design: design,
      sku: sku,
      quantity: quantity,
      storeId: storeId,
      affiliateId: affiliateId,
      affiliateNetworkId: affiliateNetworkId
    };

    var itemAlreadyExists = false;
    const cartItems = this.getCartItems();
    cartItems.forEach(
      function(cartItem) {
        if (this._areSameItems(cartItem, addedCartItem)) {
          cartItem.quantity += addedCartItem.quantity;
          itemAlreadyExists = true;
        }
      }.bind(this)
    );

    if (!itemAlreadyExists) {
      cartItems.push(addedCartItem);
    }

    this.setCartItems(cartItems, callback);
  }

  updateCartItem(updatedCartItem) {
    const cartItems = this.getCartItems();
    cartItems.forEach(
      function(cartItem) {
        if (this._areSameItems(cartItem, updatedCartItem)) {
          cartItem.design = updatedCartItem.design;
          cartItem.sku = updatedCartItem.sku;
          cartItem.quantity = parseInt(updatedCartItem.quantity, 10);
        }
      }.bind(this)
    );
    this.setCartItems(cartItems);
  }

  deleteCartItem(deletedCartItem) {
    const cartItems = this.getCartItems();
    cartItems.forEach(
      function(cartItem, index, object) {
        if (this._areSameItems(cartItem, deletedCartItem)) {
          object.splice(index, 1);
        }
      }.bind(this)
    );
    this.setCartItems(cartItems);
  }

  checkoutCartItems() {
    const cartItems = this.getCartItems();
    const tpCartItems = cartItems.map(function(cartItem, itemIndex) {
      return {
        product_id: cartItem.sku.id,
        design_id: cartItem.design.id,
        quantity: cartItem.quantity,
        affiliate_id: cartItem.affiliateId,
        affiliate_network_id: cartItem.affiliateNetworkId,
        store_id: cartItem.storeId
      };
    }, this);
    return tpCartItems;
  }

  getCartItems() {
    const cartItems = localStorage.getItem(CART_KEY);
    if (cartItems) {
      return JSON.parse(cartItems);
    } else {
      return [];
    }
  }

  setCartItems(cartItems, callback) {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    if (callback) callback();
  }

  itemsDescription(cartItems) {
    const qty = cartItems.reduce((total, item) => {
      return total + item.quantity || 1;
    }, 0);
    if (qty < 1) return 'Empty';
    return `${qty} ${qty === 1 ? 'Item' : 'Items'}`;
  }

  _areSameItems = (item1, item2) => {
    return item1.design.id === item2.design.id && item1.sku.id === item2.sku.id;
  };
}
