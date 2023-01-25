import styles from '../../styles/Header.module.css';

export default function Header(props) {
    return (
        <h2 className={styles['title-text']}>{props.title}</h2>
    )
}