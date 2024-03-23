import React from 'react'
import Image from 'next/image';
import { FaHome, FaAngleDown } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import img from '../../public/Group.png'
import styles from './Cards.module.css'

const Cards = () => {
    return (
        <div className={styles.cards_main}>
            <div className={styles.card}>
                <Image src={img} alt="img" />
                <h3>Լավագույն որակի <span>սնունդ</span></h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio illum quam fugiat veritatis odit. Eaque, animi enim, error libero odit alias, in repellendus sapiente neque dolor repudiandae adipisci blanditiis perspiciatis?</p>
                <button className={styles.btnn}>Տեսնել <FaAngleDown /></button>
            </div>
            <div className={styles.card}>
                <FaHome className={styles.home} />
                <h3>Հարմարավետ <span>համարներ</span></h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio illum quam fugiat veritatis odit. Eaque, animi enim, error libero odit alias, in repellendus sapiente neque dolor repudiandae adipisci blanditiis perspiciatis?</p>
                <button className={styles.btnn}>Տեսնել <FaAngleDown /></button>
            </div>
            <div className={styles.card}>
                <LuPartyPopper className={styles.party} />
                <h3>Հանդիսությունների <span>սրահ</span></h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio illum quam fugiat veritatis odit. Eaque, animi enim, error libero odit alias, in repellendus sapiente neque dolor repudiandae adipisci blanditiis perspiciatis?</p>
                <button className={styles.btnn}>Տեսնել <FaAngleDown /></button>
            </div>
        </div>
    )
}

export default Cards