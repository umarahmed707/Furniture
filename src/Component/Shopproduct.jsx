import React from 'react'
import { useNavigate } from 'react-router-dom'
import product from './Data/product'
import ProductCard from './ProductCard'
import Benefitsection from './Benefitsection'

export const Shopproduct = () => {

  const navigate = useNavigate();

  return (
    <div>

      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 p-4 sm:p-8 md:p-12 lg:p-16 my-4">

        {product.map((items) => {

          return (
            <ProductCard
              key={items.id}

              image={items.image}
              title={items.title}
              subtitle={items.subtitle}
              price={items.price}
              disprice={items.disprice}

              onClick={() => navigate(`/product/${items.id}`)}

              onAddtocard={() =>
                alert(`${items.title} Add to Cart!`)
              }

              onshare={() =>
                console.log('sharing....')
              }

              oncompare={() =>
                console.log('Comparing....')
              }

              onlike={() =>
                console.log('like!')
              }
            />
          )

        })}

      </div>

      <Benefitsection />

    </div>
  )
}
