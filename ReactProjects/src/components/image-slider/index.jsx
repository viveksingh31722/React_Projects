import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data! Please Wait</div>;
  }

  if (errMsg) {
    return <div>Error Occurred ! {errMsg}</div>;
  }

  function handlePrevious() {
    setCurrSlide(currSlide === 0 ? images.length - 1 : currSlide - 1);
  }

  function handleNext() {
    setCurrSlide(currSlide === images.length - 1 ? 0 : currSlide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currSlide === index ? "curr-img" : "curr-img hide-curr-img"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length > 0
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currSlide === index
                    ? "curr-indicator"
                    : "curr-indicator inactive-indicator"
                }
               onClick={()=> setCurrSlide(index)}></button>
            ))
          : null}
      </span>
    </div>
  );
}
