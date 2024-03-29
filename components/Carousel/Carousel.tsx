import { Carousel } from "flowbite-react";

export default function TCarousel() {
  return (
    <div className="h-96 w-full">
      <Carousel slideInterval={1000}>
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        />
      </Carousel>
    </div>
  );
}
