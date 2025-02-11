"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

// Mock products data
const products: Product[] = [
  {
    id: 1,
    name: "Mechanical Keyboard",
    price: 159.99,
    image: "/keyboard.jpg"
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 49.99,
    image: "/mouse.jpg"
  },
  {
    id: 3,
    name: "4K Monitor",
    price: 299.99,
    image: "/monitor.jpg"
  },
  {
    id: 4,
    name: "Gaming Headset",
    price: 129.99,
    image: "/headset.jpg"
  },
  {
    id: 5,
    name: "Webcam HD",
    price: 79.99,
    image: "/webcam.jpg"
  },
  {
    id: 6,
    name: "USB-C Dock",
    price: 189.99,
    image: "/dock.jpg"
  },
  {
    id: 7,
    name: "Ergonomic Chair",
    price: 399.99,
    image: "/chair.jpg"
  },
  {
    id: 8,
    name: "RGB Mouse Pad",
    price: 29.99,
    image: "/mousepad.jpg"
  },
  {
    id: 9,
    name: "Microphone",
    price: 149.99,
    image: "/microphone.jpg"
  }
];

export default function EcommercePage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8 bg-blue-100 min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{cart.reduce((total, item) => total + item.quantity, 0)}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80"
            align="end"
          >
            <div className="font-medium mb-4">Shopping Cart</div>
            {cart.length === 0 ? (
              <p className="text-muted-foreground">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity} × ${item.price}
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <p className="font-medium">Total: ${cartTotal.toFixed(2)}</p>
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>

      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square bg-gray-100 rounded-md mb-4">
              {/* Replace with actual Image component when images are available */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">Product Image</div>
            </div>
            <h2 className="font-semibold mb-2">{product.name}</h2>
            <p className="text-lg font-medium mb-4">${product.price}</p>
            <Button
              onClick={() => addToCart(product)}
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
