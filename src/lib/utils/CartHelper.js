const CART_KEY = 'TEEPUBLIC_CART_ITEMS';
export default class CartHelper {
  addToCart(design, sku, quantity = 1) {
    var itemAlreadyExists = false;

    const cartItems = this.getCartItems();
    cartItems.forEach(function(cartItem) {
      if (cartItem.design.id == design.id && cartItem.sku.id == sku.id) {
        cartItem.quantity += quantity;
        itemAlreadyExists = true;
      }
    });

    if (!itemAlreadyExists) {
      const newCartItem = {
        design: design,
        sku: sku,
        quantity: quantity
      };
      cartItems.push(newCartItem);
    }

    this.setCartItems(cartItems);
  }

  updateCartItem(updatedCartItem) {
    const cartItems = this.getCartItems();
    cartItems.forEach(function(cartItem) {
      if (
        cartItem.design.id == updatedCartItem.design.id &&
        cartItem.sku.id == updatedCartItem.sku.id
      ) {
        cartItem.design = updatedCartItem.design;
        cartItem.sku = updatedCartItem.sku;
        cartItem.quantity = parseInt(updatedCartItem.quantity);
      }
    });
    this.setCartItems(cartItems);
  }

  deleteCartItem(deletedCartItem) {
    const cartItems = this.getCartItems();
    cartItems.forEach(function(cartItem, index, object) {
      if (
        cartItem.design.id == deletedCartItem.design.id &&
        cartItem.sku.id == deletedCartItem.sku.id
      ) {
        object.splice(index, 1);
      }
    });
    this.setCartItems(cartItems);
  }

  getCartItems() {
    const cartItems = localStorage.getItem(CART_KEY);
    if (cartItems) {
      return JSON.parse(cartItems);
    } else {
      return [];
    }
  }

  setCartItems(cartItems) {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }
}
