import styles from './Card.module.css';
import { Link } from 'react-router-dom'

export const Card = ({ id }) => {
    return (
        <div className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa" />
            </Link>
        </div>
    );
};

export default Card
