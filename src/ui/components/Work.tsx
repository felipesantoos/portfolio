import React, { createRef, LegacyRef, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Title from "./Title";

import P0 from "../../assets/images/p0.jpg";
import P1 from "../../assets/images/p1.jpg";
import P2 from "../../assets/images/p2.jpg";
import P3 from "../../assets/images/p3.jpg";
import P4 from "../../assets/images/p4.jpg";
import P5 from "../../assets/images/p5.jpg";
import P6 from "../../assets/images/p6.jpg";
import P7 from "../../assets/images/p7.jpg";

import styles from "../styles/components/Work.module.scss";
import Subtitle from "./Subtitle";

function Work() {
    const modalRef = createRef<HTMLDivElement>();
    const modalImgRef = createRef<HTMLImageElement>();
    const imgRefList: React.RefObject<HTMLImageElement>[] = [];

    for (var i = 0; i < 8; i++) {
        imgRefList.push(createRef<HTMLImageElement>());
    }

    function focus(i: number) {
        if (modalRef.current && modalImgRef.current && imgRefList[i].current) {
            modalRef.current.style.display = "flex";
            modalImgRef.current.src = imgRefList[i].current!?.src;
        }
    }

    function closeModal() {
        if (modalRef.current) {
            modalRef.current.style.display = "none";
        }
    }

    return (
        <div className={styles.container}>
            <Title>MY WORK</Title>
            <Subtitle>
                Here are some of my latest lorem work ipsum tipsum.<br />
                Click on the images to make them bigger
            </Subtitle>
            <div>
                <img ref={imgRefList[0]} src={P0} alt="" onClick={() => focus(0)} />
                <img ref={imgRefList[1]} src={P1} alt="" onClick={() => focus(1)} />
                <img ref={imgRefList[2]} src={P2} alt="" onClick={() => focus(2)} />
                <img ref={imgRefList[3]} src={P3} alt="" onClick={() => focus(3)} />
                <img ref={imgRefList[4]} src={P4} alt="" onClick={() => focus(4)} />
                <img ref={imgRefList[5]} src={P5} alt="" onClick={() => focus(5)} />
                <img ref={imgRefList[6]} src={P6} alt="" onClick={() => focus(6)} />
                <img ref={imgRefList[7]} src={P7} alt="" onClick={() => focus(7)} />

                <div ref={modalRef} onClick={closeModal} className={styles.modal}>
                    <IoCloseSharp />
                    <img ref={modalImgRef} className={styles.content} />
                </div>
            </div>
            <button>LOAD MORE</button>
        </div>
    );
}

export default Work;
