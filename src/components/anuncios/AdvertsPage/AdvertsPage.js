import React from 'react';
import Layout from '../../layout';
import { Link } from 'react-router-dom';
import Advert from './Advert';
import AdvertFilter from './AdvertFilter';
import EmptyList from './EmptyList';
import {  loadAdverts } from '../../../store/actions';
import { getAdverts } from '../../../store/selectors';
import useStoreData from '../../../hooks/useStoreData';
import useStoreAction from '../../../hooks/useStoreAction'
import storage from '../../../utils/storage';
import { defaultFilters } from './filters';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage({ history, ...props }) {

  const adverts1 = useStoreData(getAdverts)
  const [filters, setFilters] = React.useState(getFilters);
  const LoadAdvertsAction = useStoreAction(loadAdverts);
  console.log(adverts1, 'adverts1')
  console.log(filters, 'filters')

  React.useEffect(() => {
    LoadAdvertsAction();
  }, [LoadAdvertsAction])

  React.useEffect(() => {
    saveFilters(filters);
  }, [filters]);


 
   
  return (
        <Layout title="What's going on..." {...props}>
      <AdvertFilter filterAds={ads => setFilters(ads)} selectedAds={adverts1} />
      {filters.length ? (
       
              <ul className="advertsList">
              {filters.map(({ id, ...advert } ) => (
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
