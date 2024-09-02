import React from "react";

const NewItems = () => {
  const images = [
    {
      name: "Item 1",
      description: "Description for Item 1",
      image: "/trail_1.jpeg", // Replace with your image URL
    },
    {
      name: "Item 2",
      description: "Description for Item 2",
      image: "/trail_2.jpeg", // Replace with your image URL
    },
    {
      name: "Item 3",
      description: "Description for Item 3",
      image: "/trail_3.jpg", // Replace with your image URL
    },
    {
      name: "Item 3",
      description: "Description for Item 3",
      image: "/trail_4.jpg", // Replace with your image URL
    },
    {
      name: "Item 3",
      description: "Description for Item 3",
      image: "/trail_5.jpg", // Replace with your image URL
    },
    {
      name: "Item 3",
      description: "Description for Item 3",
      image: "/caruosel_3.jpeg", // Replace with your image URL
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">New items</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10  md:mx-14 sm:mx-0 sm:items-center sm:justify-center justify-items-center">
        {images.map((image) => (
          <div
            key={image.name} // Add a unique key
            className=" h-96 md:w-[430px] w-[390px] sm:items-center sm:justify-center "
            style={{
              backgroundImage: `url(${image.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NewItems;
