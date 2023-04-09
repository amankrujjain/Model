import React from "react";
import Filter from "./Filter";
import ProductData from "./ProductData";

const ProductCard = () => {
    const cloths = [{
        id: 1,
        name: 'Red Gucci Floral Dress',
        pic: 'https://i.ibb.co/HqmJYgW/gs-Kd-Pc-Iye-Gg.png',
        price: "₹ 2000"
    },
    {
        id: 2,
        name: 'White Adidas Floral Dress',
        pic: 'https://i.ibb.co/m6V0MzR/gs-Kd-Pc-Iye-Gg-1.png',
        price: "₹ 1000"
    },
    {
        id: 3,
        name: 'White Adidas Floral Dress',
        pic: 'https://i.ibb.co/6g1KhhF/pexels-django-li-2956641-1.png',
        price: "₹ 1000"
    },
    {
        id: 4,
        name: 'White Adidas Floral Dress',
        pic: 'https://i.ibb.co/KLDN7Vt/gbarkz-vq-Knu-G8-Ga-Qc-unsplash.png',
        price: "₹ 1000"
    },
    {
        id: 5,
        name: 'White Adidas Floral Dress',
        pic: 'https://i.ibb.co/5vxgf7V/pexels-quang-anh-ha-nguyen-884979-1.png',
        price: "₹ 1000"
    },
    {
        id: 6,
        name: 'White Adidas Floral Dress',
        pic: 'https://i.ibb.co/HKFXSrQ/pietra-schwarzler-l-SLq-x-Qd-FNI-unsplash.png',
        price: "₹ 1000"
    },
    {
        id: 7,
        name: 'White Adidas Floral Dress',
        pic: 'https://i.ibb.co/BKsqym2/tracey-hocking-ve-Zp-XKU71c-unsplash.png',
        price: "₹ 1000"
    },
    {
        id: 8,
        name: 'White Adidas Floral Dress',
        pic: 'https://i.ibb.co/mbrk1DK/pexels-h-i-nguy-n-4034532.png',
        price: "₹ 1000"
    }

]
    return (
        <div className=" 2xl:container 2xl:mx-auto">
            <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Summer Collection </p>
            </div>
            <div className=" py-6 lg:px-20 md:px-6 px-4">
                <p className=" font-normal text-sm leading-3 text-gray-600 ">Home / Shop by Category / Women</p>
                <hr className=" w-full bg-gray-200 my-6" />

                <div className=" flex justify-between items-center">
                    <div className=" flex space-x-3 justify-center items-center">
                        <button to='#' className=" font-normal text-base leading-4 text-gray-800"><Filter /></button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                {
                    cloths.map((item)=><ProductData
                    key={item.id}
                    name={item.name}
                    pic={item.pic}
                    price={item.price}
                    />)
                }
                </div>
            </div>
            <div className=" flex justify-center items-center">
                <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">View More Collection</button>
            </div>
        </div>
    );
};

export default ProductCard;
