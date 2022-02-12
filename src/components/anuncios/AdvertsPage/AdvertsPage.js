import React from 'react';
import {  getAllAdverts, getFilteredAds } from '../service';
import { useEffect, useState } from 'react';
import Layout from '../../layout';
import { Link } from 'react-router-dom';
import Advert from './Advert';
import AdvertFilter from './AdvertFilter';
import EmptyList from './EmptyList';
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoaded, loadAdverts } from '../../../store/actions';
import { getAdverts } from '../../../store/selectors';
import useStoreData from '../../../hooks/useStoreData';
import useStoreAction from '../../../hooks/useStoreAction'

function AdvertsPage({ history, ...props }) {
  const [adverts, setAdverts] = useState([]);
  useEffect(() => {
    getAllAdverts().then((adverts) => setAdverts(adverts));
  }, []);
  const adverts1 = useStoreData(getAdverts)
  const LoadAdvertsAction = useStoreAction(loadAdverts);
  console.log(adverts1,'adverts1')

  React.useEffect(() => {
    LoadAdvertsAction();
  }, [LoadAdvertsAction])



  
 
   
  return (
        <Layout title="What's going on..." {...props}>
      <AdvertFilter filterAds={ads => setAdverts(ads)} selectedAds={adverts1} />
      {adverts1.length ? (
       
              <ul className="advertsList">
              {adverts1.map(({ id, ...advert1 } ) => (
              <li key={id}>
                <Link to={`/adverts/${id}`}>
                  <Advert {...advert1} />
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
