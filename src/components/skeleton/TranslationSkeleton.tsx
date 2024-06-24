import styles from './TranslationSkeleton.module.css';

function TranslationSkeleton() {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonTitle}></div>
      <ul className={styles.skeletonList}>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className={styles.skeletonItem}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonText}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TranslationSkeleton;
