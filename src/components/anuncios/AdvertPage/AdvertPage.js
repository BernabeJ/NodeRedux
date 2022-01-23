import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout"
import { deleteAdvert, getAdverts } from "../service";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './AdvertPage.css'
import { getAdvert } from "../../../store/selectors";
import { loadAdvert } from "../../../store/actions";
import { connect, useDispatch, useSelector } from "react-redux";



function AdvertPage({ history, ...props }) {
  //   const [advert, setProduct] = useState();
  const advertId = useParams(history).id;
  console.log(advertId, 'advertID')
  
  // console.log(advert)
  
  const dispatch = useDispatch();
  const advert = useSelector(getAdvert);
  
  //prueb
  
  //   const dispatch = useDispatch()
  // const adverts = useSelector(getAdverts)
  
  
  // // const [adverts, setAdverts] = useState([]);
  // useEffect(() => {
    //  dispatch(loadAdverts())
    // }, [dispatch]);
    // console.log(adverts, 'advertsLoaded')
    
    
    useEffect(() => {
      //     async function getAd() {
        //   try {
          //     const ad = await getAdverts(advertId);
          //     setProduct(ad);
          //   } catch (error) {
            //     if (error.status === 404){
              //       history.replace('/404')
    //     }else if(error.status === 401){
    //       history.replace('/login')
    //     }
    //     console.error(error.message);
    //   }
    // }
    // getAd();
      dispatch(loadAdvert(advertId))
     ;
  }, []);

    
     const handleDelete = () => {
    if (window.confirm('¿seguro que desea eliminar el producto?')){
      deleteAdvert(advertId).then(() => history.push('/'))
    }
  }


    return advert ? (
        <Layout idPage="advert-page">
            <div className="container">


            <div className="images">
                <img src={`${process.env.REACT_APP_API_BASE_URL}${advert.photo}`} alt={advert.productName} />
            </div>
            <div className="advert">
            <h1>{advert.name}</h1>
            <h2>{advert.price}€</h2>
            <h2>{advert.tags}</h2>
                <h3>{advert.sale ? (<p>"En venta"
                    </p>) : (<p>"Compra"</p>)}</h3>
                    <div className="buttons">

      <button  className="add" onClick={handleDelete}>
                Eliminar
    </button>
                    </div>
            </div>
            <div>

            </div>
                
            </div>
      
    </Layout>
  ) : (
            <Layout>Producto no encontrado <br />
                Asegurese de que el producto seleccionado es correcto
    </Layout>
  );
}

export default AdvertPage;

   

