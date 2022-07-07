import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchedItem } from '../../features/SearchedItem/component';
import { LoadingSpinner } from '../../features/Loader/component';

export const SearchedPage = () => {
   const [searchedItems, setSearchedItems] = useState([]);
   const [results, setResults] = useState([]);
   let params = useParams();

   const getSearched = async (name) => {
      const response = await fetch(`https://api.github.com/search/repositories?q=${name}`);
      const data = await response.json();
      
      setSearchedItems(data.items);
      setResults(data.total_count);
   }

   useEffect(() => {
      getSearched(params.search);
   }, [params.search]);

   return searchedItems.length ? (
      results ? (
         <div className={styles.root}>
            <p className={styles.title}>
               You`ve got {searchedItems.length} results!
            </p>
            {searchedItems.map((item) => (
               <SearchedItem item={item} />
            ))}
         </div>
      ) : (
         <p className={styles.title}>
            Sorry, no results :( Try again!
         </p>
      )
   ) : (
      <LoadingSpinner />
   )
}