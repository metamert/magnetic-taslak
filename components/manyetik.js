import React, { useEffect } from "react";

import styles from "../styles/Home.module.css";

import Lottie from 'react-lottie';
import animationData from '../lottie/wave2.json';

let radius = false;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function Home() {
  const [scroll, setScroll] = React.useState(0);
  const [width, setWidth] = React.useState(1400);

 


  const handleScroll = () => {
    const position = window.pageYOffset;
   
   
    if (position > 50 && position < window.innerWidth + 200)
      setScroll(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    setWidth(window.innerWidth);


    return window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  if (width < 1000) {
    if (scroll > width / 2) {
      radius = true;
    } else {
      radius = false;
    }
  } else {
    if (scroll > (width /3)) {
      radius = true;
    } else {
      radius = false;
    }
  }



  return (
    <div className={styles.container}>
      <div className="fullw  mt-20">
        <div className="flex  xl:flex-column center  flex-col  fullw">
          <div className="relative sss fullw center column ">
            <h1 className="tt text-start " key="Magnetic sand">
              <span className="den">Ünye</span> Manyetik Kumu
            </h1>
            <h3
              className="text-start text-3rem md:text-xl lg:text-2xl text-white  font-normal mt-4"
              style={{ color: "#8d8d8d", zIndex: 99 }}
            >
              Sanatsal takılar
            </h3>
          </div>
          <div className="stickyContainer ">
            <div className="relative fullw lg:pt-4  center stickLine  ">
        <Lottie 
	    options={defaultOptions}
        height={"90vh"}
        width={"90vw"}
       style={{position:"absolute",transition:"opacity 2s",opacity:radius?1:0.1}}
       
      />
              <div
                className="magneticBackground"
                style={{
                  height: scroll,
                  width: scroll,

                  borderRadius: "100%",
                }}
              >
                {" "}
              </div>
              <div className="textContainer">
                <div className="stickyBackground">
                  <div className="magneticDotCircle">
                    <h2 className="magneticFeatureText rotateTop">
                      Bağışıklık
                    </h2>
                    <h2 className="magneticFeatureText rotateRight">Terapi</h2>
                    <h2 className="magneticFeatureText rotateBottom">
                      Rahatlık
                    </h2>
                    <h2 className="magneticFeatureText rotateLeft">Stres</h2>
                   

                    <div className="magneticCircle">
                      <video autoPlay loop muted className="circleR">
                        <source src="/magneticVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
