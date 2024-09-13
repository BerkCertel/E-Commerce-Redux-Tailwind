import Slider from "react-slick";

function SliderComp() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <div className="slick-slider-main-div">
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 p-5">
          <div>
            <div className="text-5xl font-bold">En kaliteli ayakkabılar...</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, aperiam. Quas animi vel repellendus, enim excepturi in
              ratione, non facilis eius ut dolor doloremque expedita?
            </div>
            <div className="border rounded-full text-2xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200 ">
              İncele
            </div>
          </div>
          <img
            src="/img/productImg/pngwing.com.png"
            alt=""
            className=" w-96 h-96"
          />
        </div>
        <div className="!flex items-center bg-gray-100 p-5">
          <div>
            <div className="text-5xl font-bold">En kaliteli ayakkabılar...</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, aperiam. Quas animi vel repellendus, enim excepturi in
              ratione, non facilis eius ut dolor doloremque expedita?
            </div>
            <div className="border rounded-full text-2xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200 ">
              İncele
            </div>
          </div>
          <img
            src="/img/productImg/pngwing.com (2).png"
            alt=""
            className=" w-96 h-96"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComp;
