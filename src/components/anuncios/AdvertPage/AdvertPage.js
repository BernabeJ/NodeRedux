import React from "react";
import Layout from "../../layout/Layout"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './AdvertPage.css'
import { getAdvert } from "../../../store/selectors";
import { advertDeleted, loadAdvert } from "../../../store/actions";
import useStoreAction from "../../../hooks/useStoreAction";
import useStoreData from "../../../hooks/useStoreData";



function AdvertPage({ history }) {

  const advertId = useParams(history).id;
  const loadAdAction = useStoreAction(loadAdvert)
  console.log(advertId, 'advertID')
  const advert = useStoreData(state =>getAdvert(state, advertId));
  console.log(advert, 'advert')
  const deletedAdAction = useStoreAction(advertDeleted);
  
  
  React.useEffect(() => {
    loadAdAction(advertId);
  }, [loadAdAction, advertId])

    
     const handleDelete = () => {
    if (window.confirm('¿seguro que desea eliminar el producto?')){
     deletedAdAction(advertId)
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

   

