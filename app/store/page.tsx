"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Alien Slime",
    description: "A slime that is alien",
    price: 10,
    image: "/images/alien-slime.png"
  },
  {
    id: 2,
    name: "Boba Slime",
    description: "A slime that is boba",
    price: 10,
    image: "/images/boba-slime.png"
  },
  {
    id: 3,
    name: "Cat Slime",
    description: "A slime that is cat",
    price: 10,
    image: "/images/cat-slime.png"
  },
  {
    id: 4,
    name: "Dog Slime",
    description: "A slime that is dog",
    price: 10,
    image: "/images/dog-slime.png"
  },
  {
    id: 5,
    name: "Frog Slime",
    description: "A slime that is frog",
    price: 10,
    image: "/images/frog-slime.png"
  },
  {
    id: 6,
    name: "Goblin Slime",
    description: "A slime that is goblin",
    price: 10,
    image: "/images/goblin-slime.png"
  }
];

export default function Store() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <h2>Cart</h2>
          {/* TODO: make the cart look nice */}
          <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-4">
            {cart.map((product) => (
              <div key={product.id}>{product.name}</div>
            ))}
          </div>
        </div>
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
