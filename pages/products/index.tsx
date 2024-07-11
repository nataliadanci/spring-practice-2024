import { Inter } from "next/font/google";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function InputPage() {
  const [value, setValue] = useState(""); // hook

  const products = [
    {
      images: [
        { src: '/vans1.jpg', alt: 'Vans 1' },
        { src: '/vans2.jpg', alt: 'Vans 2' },
      ],
      title: 'Vans Old School',
      price: 319.99,
      isPacket: true,
      isPremium: true,
      sizes: ['39', '40', '41','44'],
      colors: [
        { colorCode: '#abcdef', colorName: 'gray', urlToProduct: 'www.route-to-another-product.com' },
        { colorCode: '#000000', colorName: 'black', urlToProduct: 'www.route-to-another-product.com' },
      ],
      bestPrice: 'Best price in 30 days',
      isFavorite: false,
      discount: 15
    },
    {
      images: [
        { src: '/camasa.avif', alt: 'Random Image' },
        { src: '/camasa2.avif', alt: 'Random Image' },
        { src: '/camasa3.avif', alt: 'Random Image' },
      ],
      title: 'Camasa',
      price: 199.99,
      isPacket: true,
      isPremium: false,
      sizes: ['S', 'M', 'L'],
      colors: [
        { colorCode: '#ff0000', colorName: 'red', urlToProduct: 'www.route-to-another-product.com' },
        { colorCode: '#00ff00', colorName: 'green', urlToProduct: 'www.route-to-another-product.com' },
      ],
      bestPrice: 'Best price in 15 days',
      isFavorite: true,
      discount: 10
    },
    {
      images: [
        { src: '/tshirt.avif', alt: 'Random Image' },
        { src: '/tshirt2.avif', alt: 'Random Image' },
      ],
      title: 'T-shirt',
      price: 149.99,
      isPacket: true,
      isPremium: true,
      sizes: ['XS', 'S', 'M'],
      colors: [
        { colorCode: '#0000ff', colorName: 'blue', urlToProduct: 'www.route-to-another-product.com' },
        { colorCode: '#ffff00', colorName: 'yellow', urlToProduct: 'www.route-to-another-product.com' },
      ],
      bestPrice: 'Best price in 20 days',
      isFavorite: false,
      discount: 20
    },
    {
      images: [
        { src: '/jacket.avif', alt: 'Random Image' },
      ],
      title: 'Product 4',
      price: 269.99,
      isPacket: true,
      isPremium: false,
      sizes: ['M', 'L', 'XL'],
      colors: [
        { colorCode: '#008000', colorName: 'green', urlToProduct: 'www.route-to-another-product.com' },
        { colorCode: '#800080', colorName: 'purple', urlToProduct: 'www.route-to-another-product.com' },
      ],
      bestPrice: 'Best price in 25 days',
      isFavorite: true,
      discount: 15
    },
    {
      images: [
        { src: '/dress2.avif', alt: 'Random Image' },
        { src: '/dress.avif', alt: 'Random Image' },
        { src: '/dress3.avif', alt: 'Random Image' },
      ],
      title: 'Product 5',
      price: 99.99,
      isPacket: true,
      isPremium: false,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { colorCode: '#800000', colorName: 'maroon', urlToProduct: 'www.route-to-another-product.com' },
        { colorCode: '#008080', colorName: 'teal', urlToProduct: 'www.route-to-another-product.com' },
      ],
      bestPrice: 'Best price in 10 days',
      isFavorite: false,
      discount: 5
    },
    {
      images: [
        { src: '/shirt.avif', alt: 'Random Image' },
        { src: '/shirt2.avif', alt: 'Random Image' },
      ],
      title: 'Product 6',
      price: 399.99,
      isPacket: true,
      isPremium: true,
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: [
        { colorCode: '#800000', colorName: 'maroon', urlToProduct: 'www.route-to-another-product.com' },
        { colorCode: '#008080', colorName: 'teal', urlToProduct: 'www.route-to-another-product.com' },
      ],
      bestPrice: 'Best price in 25 days',
      isFavorite: false,
      discount: 10
    },
    {
      images: [
        { src: '/pulover.avif', alt: 'Random Image' },
        { src: '/pulover2,avif', alt: 'Random Image' },
      ],
      title: 'Product 7',
      price: 149.99,
      isPacket: true,
      isPremium: false,
      sizes: ['S', 'M', 'L'],
      colors: [
        { colorCode: '#ff0000', colorName: 'red', urlToProduct: 'www.route-to-another-product.com' },
        { colorCode: '#00ff00', colorName: 'green', urlToProduct: 'www.route-to-another-product.com' },
      ],
      bestPrice: 'Best price in 15 days',
      isFavorite: true,
      discount: 10
    },
  ];

  return (
    <main className={`flex min-h-screen flex-col bg-white  justify-between`}>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </Layout>
    </main>
  );
}
