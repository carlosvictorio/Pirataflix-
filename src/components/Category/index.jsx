import styles from './Category.module.css'
import Videos from '../../json/videos.json'

export const categories = [
    "Marvel",
    "DC",
    "Anime"
  ]
  
export function filterCategory(id) {
    return (
      Videos.filter( video => video.category === categories[id])
    )
  }

const Category = ({ category, children }) => {
    return(
      <section className={styles.category}>
        <h2>{category}</h2>
        <div>
            {children}
        </div>
      </section>
    );
}

export default Category;
