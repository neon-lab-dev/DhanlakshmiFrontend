import React, { useEffect, useState } from "react";
import { productData } from "../assets/mock/productData";
import productImage from "../assets/images/product.svg";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components";

const Product = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isReadMore, setIsReadMore] = useState(false);
  const [activeTab, setActiveTab] = useState(
    productData
      .map((product) => product.title)
      .includes(searchParam.get("tab") || "")
      ? searchParam.get("tab")
      : productData[0].title
  );

  useEffect(() => {
    setSearchParam({ tab: activeTab });
    setProducts(
      productData.find((product) => product.title === activeTab)?.products || []
    );
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-5 wrapper">
      <h2 className="text-heading font-600 font-Inter text-xl">Products</h2>
      <div className="flex gap-3 max-w-full overflow-x-scroll md:overflow-x-hidden">
        {productData.map((product, i) => (
          <Button
            key={i}
            className="px-4 md:py-3 min-w-fit"
            onClick={() => {
              setActiveTab(product.title);
            }}
            variant={activeTab === product.title ? "primary" : "secondary"}
          >
            {product.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <span className="hidden md:block font-600 text-3xl">{activeTab}</span>
        <div className="flex flex-col gap-4">
          {/* // product card */}
          {products.map((product, i) => (
            <div
              key={i}
              className="rounded-xl md:flex-row bg-white p-3 md:px-6 md:py-4 flex flex-col gap-5 2xl:gap-10 md:min-h-[200px]"
              style={{
                boxShadow: "0px 0px 3.091px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="h-[253px] md:m-auto md:max-h-[188px] md:min-w-[241px] md:w-[241px] w-full relative">
                <img
                  src={product.avatar.url || productImage}
                  onError={(e) => {
                    e.target.src = productImage;
                  }}
                  alt={product.title}
                  className="w-full h-full object-contain object-center absolute"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-Inter font-700">{product.name}</h3>
                <p className="xl:hidden">
                  {product.description.length > 100 ? (
                    <>
                      <span>
                        {isReadMore
                          ? product.description
                          : product.description.slice(0, 100) + "..."}
                      </span>
                      <button
                        onClick={() => setIsReadMore(!isReadMore)}
                        className="text-base font-600 ml-2"
                      >
                        {isReadMore ? "Read Less" : "Read More"}
                      </button>
                    </>
                  ) : (
                    product.description
                  )}
                </p>
                <p className="hidden xl:block">{product.description}</p>
                <div className="flex gap-6 flex-col md:flex-row-reverse md:mr-auto md:items-center">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base text-primary font-500">
                      Available in packs of
                    </h4>
                    <div className="flex gap-2 flex-wrap">
                      {product.available_packs?.split(",").map((pack, i) => (
                        <div
                          key={i}
                          className="text-base text-bodyText rounded bg-muted font-600 px-4 py-2"
                        >
                          {pack}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full md:w-[200px] md:py-3 min-w-fit"
                    variant="secondary"
                  >
                    Inquire Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
