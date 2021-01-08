import React, { useEffect, useState } from "react";
import Levelline from "../components/levelLine";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import Kumtası from "../components/kumtası";
import { RotateLoader } from "react-spinners";
import Manyetik from "../components/manyetik";
import Thymus from "../components/thymus";
import Level2 from "../components/level2";
import Level3 from "../components/level3";
import Buttons from "../components/buttons";

import config from "react-reveal/globals";

config({ ssrFadeout: true });
import { Fade } from "react-reveal";
import Ara from "../components/aralevel";

import Email from "../components/email";
export default function Home() {
  const [loading, setloading] = useState(true);
  const size = useWindowSize();
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Manyetik></Manyetik>
        <div style={{ display: "none" }}>
          <h2>Stress relief anxiety</h2>,<h2>gift for girlfriend necklace </h2>,
          <h2>Magnetite pendant </h2>,<h2>Gemstone dice </h2>,
          <h3> anxiety attack vs panic attack</h3>,
          <h3> how many chakra are there </h3>,
          <h3> stress relief the office</h3>,<h3>stress effects on body</h3>,
          <h3>crystal store near me</h3>,<h3> black sand beach hawaii</h3>,
          <h3>black sand beach on the big island</h3>,
          <h3>healing properties of amethyst</h3>,<h3>Breastmilk jewelry </h3>,
          <h4>valentines day </h4>,<h4>necklaces for women </h4>,
        </div>

        <Levelline></Levelline>
        <Fade duration={2000}>
          <h2 className="text-center text-6xl font-bold mb-32 shadow-lg">
            Trigger the thymus gland .
          </h2>
        </Fade>
        <Thymus></Thymus>

        <Level3></Level3>

        <h2 className="text-center text-6xl font-bold ">Use as a necklace .</h2>
        <h4
          className="text-center text-3xl font-normal mb-32 mt-8 shadow-lg p-8"
          style={{ color: "#333232", width: "70%" }}
        >
          After long efforts, we made it into stone so that you can use it where
          your thymus gland is.You can use it as a necklace. Besides its
          benefits,
          <br></br>
          <span class="text-3xl font-bold text-black">
            you can use it as a stylish accessory.
          </span>
        </h4>

        <iframe
          width="80%"
          height="400px"
          src="https://www.youtube.com/embed/oDqmi-0kDLo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Ara></Ara>
        <h2 className="text-center text-6xl font-bold ">
          Location of magnetic sand
        </h2>
        <h4
          className="text-center text-3xl font-normal mb-32 mt-8 shadow-lg p-8"
          style={{ color: "#333232", width: "70%" }}
        >
          Which gives its name to the Black Sea sand, 4-kilometer beach is
          located in the district of
          <span class="text-3xl font-bold text-black ml-2">
            <Link href="https://goo.gl/maps/1X8JcURvEbemsAEE6">
              Turkey Unye.
            </Link>
          </span>
          <br></br>
          It is completely natural. It sticks to you and is difficult to come
          off, you can collect it with a magnet
        </h4>
        <Kumtası></Kumtası>

        <Level2></Level2>

        <h2 className="text-center text-6xl font-bold mb-4 mt-8">
          What is our difference ?
        </h2>
        <h4
          className="text-center text-3xl font-normal mb-32 shadow-lg p-4 "
          style={{ color: "#333232", width: "70%" }}
        >
          Ukraine, Japan use magnetic sand for healing purposes like sand bath,
          however we are the only ones in the world that make this sand an
          accessory.
          <span class="text-3xl font-bold text-black ml-2">
            Health and elegance together.
          </span>
        </h4>
        <Buttons></Buttons>
      </main>
      <Email></Email>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text-center text-gray-500 text-1xl">
            &copy;2020 Magnetic Sand All rights reserved.
          </p>
        </a>
        <a
          href="https://www.instagram.com/unye_manyetik_kumtasi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          instagram
        </a>
        <a
          href="https://www.etsy.com/shop/MagneticPendant"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          etsy
        </a>
        <a
          href="twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          twitter
        </a>
        <a
          href="https://www.pinterest.com/targaryengg15"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          pinterest
        </a>

      </footer>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
