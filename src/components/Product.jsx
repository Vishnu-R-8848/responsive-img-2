import React from 'react'

const Product = () => {
   const productsData = [
    {
      id: 1,
      name: "Minimalist Tunic",
      price: 120,
      image:
        "https://i.pinimg.com/736x/f3/47/b1/f347b1f755b62165c92ff91ab30a1424.jpg",
      colors: ["#E5E7EB", "#111827"],
    },
    {
      id: 2,
      name: "Oversized Blazer",
      price: 245,
      image:
        "https://i.pinimg.com/736x/03/fe/9d/03fe9dcb81b155e40f634d83f1e6d422.jpg",
      colors: ["#D1D5DB", "#4B5563"],
    },
    {
      id: 3,
      name: "Linen Trousers",
      price: 180,
      image:
        "https://i.pinimg.com/1200x/cc/9c/75/cc9c75a9eb7c6e5cee1975ceedb0d9a0.jpg",
      colors: ["#F3F4F6", "#000000"],
    },
    {
      id: 4,
      name: "Cotton Shirt",
      price: 95,
      image:
        "https://i.pinimg.com/736x/35/74/43/357443d60c5bd23346407c4cef60ff57.jpg",
      colors: ["#FFFFFF", "#9CA3AF"],
    },
    {
      id: 5,
      name: "Tailored Overcoat",
      price: 420,
      image:
        "https://i.pinimg.com/1200x/e9/5f/33/e95f33719fcc0a2080d2de318316eb68.jpg",
      colors: ["#262626", "#404040"],
    },
    {
      id: 6,
      name: "Structured Blazer",
      price: 310,
      image:
        "https://i.pinimg.com/736x/b8/bf/0b/b8bf0b3e0067f59935864d6bb8f75a7e.jpg",
      colors: ["#171717", "#D4D4D4"],
    },
    {
      id: 7,
      name: "Classic Suit",
      price: 550,
      image:
        "https://i.pinimg.com/736x/5b/89/40/5b8940eb4e5b4ef9c9f4f867afedf95d.jpg",
      colors: ["#0A0A0A", "#525252"],
    },
    {
      id: 8,
      name: "Modern Essential",
      price: 155,
      image:
        "https://i.pinimg.com/736x/5d/53/31/5d5331749d9d9979f6f59e4a76ce95c5.jpg",
      colors: ["#FFFFFF", "#737373"],
    },
  ];
  return (
    <div className="min-h-screen w-full flex flex-col text-black ">
      <div className="caption-wrapper w-full">
        <h2 className="text-[100px] md:text-[150px] lg:text-[250px] xl:text-[300px] uppercase font-bold text-right flex w-full leading-[.8]">
          t-off
          <span className="flex items-end justify-between px-4 flex-1">
            <p className="uppercase text-xl">new collection</p>
            <p className="capitalize underline text-xl font-light ">shop</p>
          </span>
        </h2>
      </div>
      <div className="card-wrapper w-full grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-white">
        {productsData.map((product) => (
          <article
            key={product.id}
            className="card min-h-[500px] border-2 border-white group relative overflow-hidden bg-transparent"
          >
            <figure className="img-wrapper h-[400px] w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-top transition-all duration-700 ease-in-out transform group-hover:scale-105"
              />
            </figure>
            <div className="p-4 flex flex-col gap-2 ">
              <div className="flex justify-between items-center">
                <h3 className="uppercase text-sm tracking-widest font-medium">
                  {product.name}
                </h3>
                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-md border border-white/20"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
              <span className="text-sm">${product.price}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Product;
