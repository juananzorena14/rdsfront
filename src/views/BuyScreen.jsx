import React, { useEffect } from 'react'

const BuyScreen = () => {
    const precio= 600;
    const [total, setTotal] = useState (precio);
    const [inputValue, setInputValue] = useState (1);

    useEffect (()=> {
        setTotal ({products.price} * inputValue);
    }, {inputValue});
  
  return (
    <>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12 col-md-8 offset-md-2'>
                    <div className="card text-bg-dark mb-3">
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <image src= {products.img}
                                    className='img-fluid rounded-start h-100 object-fit-cover' 
                                    alt="" />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{products.name} </h5>
                                    <p className='card-text'>{products.text} </p>
                                    <h4>Precio: {products.price}</h4>
                                    <div className='col-12 col-md-6 offset-md-6 d-flex flex-column align-items-end'>
                                        <input 
                                        type="number"
                                        className='form-control'
                                        min= {1}
                                        value= {inputValue}
                                        onChange= {(e) => setInputValue(e.target.value)} />
                                        <h4>Total: ${total} </h4>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
            </div>
        </div>
    </>    
  )
}

export default BuyScreen