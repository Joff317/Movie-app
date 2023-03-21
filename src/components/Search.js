import React from 'react';

const Search = () => {
   return (
      <div className="form-component">
         <div className="form-container">
            <form>
               <input type="text" placeholder="Entrez le titre d'un film" id='search-input'/>
               <input type="submit" />
            </form>
            <div className="btn-sort-container">
               <div className="btn-sort" id='goodToBad'>
                  Top <span>➜</span>
               </div>
               <div className="btn-sort" id='badToGood'>
                  Flop <span>➜</span>
               </div>
            </div>
         </div>

         <div className="result">Resultat</div>
      </div>
   );
};

export default Search;