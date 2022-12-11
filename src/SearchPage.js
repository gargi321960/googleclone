import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from "./response";
import {Link} from "react-router-dom";
import  Search  from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function SearchPage() {
    const[{term},dispatch]=useStateValue();
    const {data}=useGoogleSearch(term);

  // const data=Response;

    console.log(data)
  return (
    <div className='searchPage'>
        <div className='searchPage__header'>
        <Link to="/">
        <img className='searchPage__logo'
        src='https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif'
         alt=''/>

        </Link>

        <div className='searchPage__headerBody'>
         <Search hideButtons/>
         <div className='searchPage__options'>
         <div className='searchPage__optionsLeft'>
         <div className='searchPage__options'>
            <SearchIcon/>
            <Link to="/all">All</Link>
            </div>

            <div className='searchPage__options'>
            <DescriptionIcon/>
            <Link to="/news">News</Link>
            </div>

            <div className='searchPage__options'>
            <ImageIcon/>
            <Link to="/image">Image</Link>
            </div>

            <div className='searchPage__options'>
            <LocalOfferIcon/>
            <Link to="/shopping">Shopping</Link>
            </div>
            
            <div className='searchPage__options'>
            <LocationOnIcon/>
            <Link to="/maps">Maps</Link>
            </div>

            <div className='searchPage__options'>
            <MoreVertIcon/>
            <Link to="/more">More</Link>
            </div>

        </div>
          <div className='searchPage__optionsRight'>
          <div className='searchPage__options'>
            
            <Link to="/settings">Settings</Link>
            </div>
            <div className='searchPage__options'>
            
            <Link to="/tools">Tools</Link>
            </div>
            </div>
         </div>
        </div>
        </div>
        {term && (
           <div className='searchPage__results'>
           <p className='searchPage_resultCount'>
               About {data?.searchInformation.formattedTotalResults } results ({data?.searchInformation.formattedSearchTime} seconds ) for {term}
           </p>
           {data?.items.map(item =>(
            <div
            
            className='searchPage__result'>
                 <a className='searchPage__resultLink' href={item.link}>
                    {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                     <img className='searchPage__resultImage'
                     src={ item.pagemap?.cse_image[0]?.src
                    }
                     alt=""
                     />
                    )}
                    {item.displayLink} 
                </a>
                <a className='searchPage__resultTitle'
                href={item.link}>
                    <h2>{item.title}</h2>
                </a>
                <p className='searchPage__resultSnippet'>
                    {item.snippet}
                </p>
                </div>
           ))}
           </div> 
        )}
        
    </div>
  )
}

export default SearchPage