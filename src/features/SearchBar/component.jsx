import styles from './styles.module.scss';
import { useState } from 'react';
import SearchIcon from './img/search.svg';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
   const [input, setInput] = useState('');
   const navigate = useNavigate();

   const submitHandler = (e) => {
      e.preventDefault();
      navigate('/github-reps/searched/' + input);
   };

   return(
      <form 
         onSubmit={submitHandler} 
         className={styles.root}
      >
         <div className={styles.inputBlock}>
            <img 
               className={styles.searchIcon} 
               src={SearchIcon}
               loading='lazy' 
            />
            <input 
               onChange={(e) => setInput(e.target.value)}
               type='text'
               placeholder='Search repos'
               value={input} 
            />
         </div>
      </form>
   )
}