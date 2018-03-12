const CART_KEY = 'TEEPUBLIC_CART_ITEMS';
export default class CartHelper {
  addToCart(design, product, quantity = 1) {
    var itemAlreadyExists = false;

    const cartItems = this.getCartItems();
    cartItems.forEach(function(cartItem) {
      if (
        cartItem.design.id == design.id &&
        cartItem.product.id == product.id
      ) {
        cartItem.quantity += quantity;
        itemAlreadyExists = true;
      }
    });

    if (!itemAlreadyExists) {
      const newCartItem = {
        design: design,
        product: product,
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
        cartItem.product.id == updatedCartItem.product.id
      ) {
        cartItem.design = updatedCartItem.design;
        cartItem.product = updatedCartItem.product;
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
        cartItem.product.id == deletedCartItem.product.id
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
