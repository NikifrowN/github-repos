import styles from './styles.module.scss';
import Star from './img/star.png';
import Fork from './img/fork.png';

export const SearchedItem = ({item}) => (
   <div className={styles.root} >
      <p className={styles.title}>
         <a href={item.html_url} target="_blank">
            {item.name}
         </a>
         <span> by </span>
         <a href={item.owner.html_url} target="_blank">
            {item.owner.login}
         </a>
      </p>
      <div className={styles.info} >
         <div className={styles.infoItem}>
            <p>
               {item.language}
            </p>
         </div>
         <div className={styles.infoItem}>
            <img src={Star} alt="icon"/>
            <p>
               {item.stargazers_count}
            </p>
         </div>
         <div className={styles.infoItem}>
            <img src={Fork} alt="icon"/>
            <p>
               {item.forks_count}
            </p>
         </div>
         <div className={styles.infoItem}>
            <p>
               <span>last update:</span>  {item.updated_at}
            </p>
         </div>
      </div>
   </div>
)