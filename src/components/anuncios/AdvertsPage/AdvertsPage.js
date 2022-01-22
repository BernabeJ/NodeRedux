import {  getAllAdverts, getFilteredAds } from '../service';
import { useEffect, useState } from 'react';
import Layout from '../../layout';
import { Link } from 'react-router-dom';
import Advert from './Advert';
import AdvertFilter from './AdvertFilter';
import EmptyList from './EmptyList';
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoaded } from '../../../store/actions';
import { getAdverts } from '../../../store/selectors';


function AdvertsPage({ history, ...props }) {
  const [adverts, setAdverts] = useState([]);
  useEffect(() => {
    getAllAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  const dispatch = useDispatch()

  // const [adverts, setAdverts] = useState([]);
  // useEffect(() => {
  //   getAllAdverts().then((adverts) => dispatch(advertsLoaded(adverts)));
  // }, []);
  // const adverts = useSelector(getAdverts)
  // console.log(advertsLoaded.payload, 'advertsLoaded')
  
 
   
  return (
        <Layout title="What's going on..." {...props}>
      <AdvertFilter filterAds={ads => setAdverts(ads)} selectedAds={adverts} />
      {adverts.length ? (
       
              <ul className="advertsList">
              {adverts.map(({ id, ...advert } ) => (
              <li key={id}>
                <Link to={`/adverts/${id}`}>
                  <Advert {...advert} />
                </Link>
              </li>
            ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </Layout>
  );
  
 
}


  

export default AdvertsPage;
