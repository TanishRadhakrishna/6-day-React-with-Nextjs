import React from "react";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="flex justify-center p-4">
                <img 
                    src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a354077c3747d8f6.png?q=20" 
                    alt="Banner" 
                    className="w-full max-w-6xl rounded-lg shadow-md"
                />
            </div>
            <div className="flex flex-row justify-center gap-6 p-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                        src="https://m.media-amazon.com/images/I/713TUYjagQL.jpg" 
                        alt="YIER Bluetooth Speakers" 
                        className="w-48 h-48 object-cover rounded-md"
                    />
                </div>
                <div className="">
                    <img 
                        src="PRODUCT_IMAGE_URL_2" 
                        alt="Product 2" 
                        className="w-48 h-48 object-cover rounded-md"
                    />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                        src="PRODUCT_IMAGE_URL_3" 
                        alt="Product 3" 
                        className="w-48 h-48 object-cover rounded-md"
                    />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                        src="PRODUCT_IMAGE_URL_4" 
                        alt="Product 4" 
                        className="w-48 h-48 object-cover rounded-md"
                    />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                        src="PRODUCT_IMAGE_URL_5" 
                        alt="Product 5" 
                        className="w-48 h-48 object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}