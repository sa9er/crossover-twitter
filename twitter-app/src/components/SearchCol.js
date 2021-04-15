import React from 'react';
import './SearchCol.css';

const SearchCol = () => {

    return (
        <div className="search-body">
            <div className="filter" >
                <h3>Search filters</h3>

                <br></br>
                  <ul>
                     <li>
                         People
                      </li> 
                     <li>
                         From
                     </li>
                     <li>
                         People you follow
                     </li>
                  </ul>

                  <br></br>

                  <ul>
                     <li>
                         Location
                      </li> 
                     <li>
                         Anywhere
                     </li>
                     <li>
                         Near you
                     </li>
                  </ul> 

                  <br></br>

                  <p>Advanced search</p>
                

                

            </div>

            <br></br>

            <div className="trends">
                <h3>
                    Trends
                </h3>
            </div>

            <br></br>

            <div className="whoToFollow">
                <h3>Who to follow</h3>
                <div className="person">name</div>
                <div className="person">name</div>
                <p>Show more</p>
            </div>
        </div>
    )
}

export default SearchCol;