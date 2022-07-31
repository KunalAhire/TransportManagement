import React, { useContext, useState } from 'react'
import { Print } from './Components/Print'
import Context from './context/Context'
const MainApp = (props) => { 
    const [inputs, setinputs] = useState({ from: '', to: '',transportCharge:'',serviceCharge:'',gst:'',quantity:''})
    const { addBill, total} = useContext(Context)
    const onchange = (e) => {
        setinputs({ ...inputs, [e.target.name]: e.target.value });
    }
    const onsubmit = (e) => {
        e.preventDefault();
        addBill(inputs.transportCharge, inputs.serviceCharge, inputs.gst, inputs.quantity)
    }
    return (
        <div className='d-flex mt-5 container'>
            <div className='w-50 bg-secondary bg-opacity-10 bg-gradient '>
                <h2 style={{ textAlign: 'center'}}>Transport Service</h2>
                <form className='row mt-2' >
                    <div className="mb-3 col-md-6">
                     <label htmlFor="From" className="form-label">From</label>
                        <input type="text" className="form-control" onChange={(onchange)} name='from' id="From" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="To" className="form-label">To</label>
                        <input type="text" className="form-control" onChange={(onchange)} name='to' id="To" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="TransportCharge" className="form-label">Transport Charge</label>
                        <input type="number" className="form-control" onChange={(onchange)} name='transportCharge' id="TransportCharge" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="ServiceCharge" className="form-label">Service Charge</label>
                        <input type="number" className="form-control" onChange={(onchange)} name='serviceCharge' id="ServiceCharge" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="Quantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control" onChange={(onchange)} name='quantity' id="Quantity" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="Gst" className="form-label">Gst%</label>
                        <input type="number" className="form-control" onChange={(onchange)} name='gst' id="Gst" />
                    </div>
                    <div className="mb-3 col-md-12">
                        <label htmlFor="Total" className="form-label fs-5">Total: {total}</label>
                    </div> 
                </form>
              {/* {  <button className="btn btn-primary col-md-5 mx-auto ">Add</button>} */}
                    <button className="btn btn-primary col-md-10 ms-5" onClick={onsubmit}>Submit</button>
            </div>
             <Print inputes = {inputs} />
        </div>
    )
}

export default MainApp