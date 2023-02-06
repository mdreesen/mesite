import { Parallax, Background } from 'react-parallax';
import Image from "next/image";

import styles from '../../src/styles/Hero.module.css';

export default function Component(props) {

    return (
        <Parallax className={styles['backgroundImg']} bgImage={`/images/${props.heroImage}.webp`} bgImageAlt={`${props.heroImage}`} strength={200}>
         <Image
                className={styles['backgroundImg']}
                src={`/images/${props.heroImageTwo}.webp`}
                alt={props.heroImageTwo}
                width={1080}
                height={1080}
            />
        </Parallax>
    );
}