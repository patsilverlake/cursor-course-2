"use client"

//we want a store page that renders a list of products
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ShoppingCart } from "lucide-react";

//lets use 6 test items of products (we're a clothing shop for left handed people)
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Left Handed Hat",
    description: "A hat for left handed people",
    price: 10,
  },
  {
    id: 2,
    name: "Left Handed Shirt",
    description: "A shirt for left handed people",
    price: 20,
  },
  {
    id: 3,
    name: "Left Handed Pants",
    description: "A pair of pants for left handed people",
    price: 30,
  },
  {
    id: 4,
    name: "Left Handed Shoes",
    description: "A pair of shoes for left handed people",
    price: 40,
  },
  {
    id: 5,
    name: "Left Handed Socks",
    description: "A pair of socks for left handed people",
    price: 5,
  },
  {
    id: 6,
    name: "Left Handed Jacket",
    description: "A jacket for left handed people",
    price: 50,
  },
];

export default function Store() {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    }
    const router = useRouter();
    const handleClick = () => {
        router.push("/cart");
    }   
  return (  
    <div className="min-h-screen p-8 bg-background">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Left Handed Boutique</h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                        Items in cart: {cart.length}
                    </span>
                    <Button 
                        onClick={handleClick}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        View Cart
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow flex flex-col">
                        <CardHeader className="flex-1">
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col gap-4">
                            <div className="flex justify-between items-center w-full">
                                <p className="text-lg font-bold">${product.price}</p>
                                <Button 
                                    onClick={() => addToCart(product)}
                                    variant="outline"
                                    size="sm"
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}

