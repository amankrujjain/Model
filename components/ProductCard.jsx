import React from "react";
import Filter from "./Filter";
import ProductData from "./ProductData";
import Pic1 from '../assets/images/pic1.jpg'
import Pic2 from '../assets/images/pic2.webp'
import Pic3 from '../assets/images/pic3.jpg'
import Pic4 from '../assets/images/p4.jpg'
import Pic5 from '../assets/images/pic5.jpg'
import Pic6 from '../assets/images/pic6.jpg'
import Pic7 from '../assets/images/pic7.jpg'
import Pic8 from '../assets/images/pic8.jpg'



const ProductCard = () => {
    const cloths = [{
        id: 1,
        name: 'Red Gucci Floral Dress',
        pic: Pic1,
        price: "₹ 2000"
    },
    {
        id: 2,
        name: 'White Adidas Floral Dress',
        pic: Pic2,
        price: "₹ 1000"
    },
    {
        id: 3,
        name: 'White Adidas Floral Dress',
        pic: Pic3,
        price: "₹ 1000"
    },
    {
        id: 4,
        name: 'White Adidas Floral Dress',
        pic: Pic4,
        price: "₹ 1000"
    },
    {
        id: 5,
        name: 'White Adidas Floral Dress',
        pic: Pic5,
        price: "₹ 1000"
    },
    {
        id: 6,
        name: 'White Adidas Floral Dress',
        pic: Pic6,
        price: "₹ 1000"
    },
    {
        id: 7,
        name: 'White Adidas Floral Dress',
        pic: Pic7,
        price: "₹ 1000"
    },
    {
        id: 8,
        name: 'White Adidas Floral Dress',
        pic: Pic8,
        price: "₹ 1000"
    }

]
    return (
        <div className=" 2xl:container 2xl:mx-auto">
            <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Summer Collection </p>
            </div>
            <div className=" py-6 lg:px-20 md:px-6 px-4">
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
