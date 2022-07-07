import styles from './styles.module.scss';

export const MainPage = () => (
   <section className={styles.root}>
      <h3>
         Where the world builds software
      </h3>
      <p>
         Millions of developers and companies build, ship, and maintain their software on GitHub—the 
         largest and most advanced development platform in the world.
      </p>
      <div className={styles.features}>
         <div className={styles.featuresItem}>
            <p>83+ million</p>
            <h5>Developers</h5>
         </div>
         <div className={styles.featuresItem}>
            <p>4+ million</p>
            <h5>Organizations</h5>
         </div>
         <div className={styles.featuresItem}>
            <p>200+ million</p>
            <h5>Repositories</h5>
         </div>
         <div className={styles.featuresItem}>
            <p>90%</p>
            <h5>Fortune 100</h5>
         </div>
      </div>
   </section>
)