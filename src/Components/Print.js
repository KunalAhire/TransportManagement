import React, { useRef, useContext, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Context from '../context/Context';
export const Print = (props) => {
    const { total, details } = useContext(Context);
    const { Tservice, Phnumber, address } = details
    const { from, to, transportCharge, serviceCharge, quantity, gst } = props.inputes;
    const componentRef = useRef();
    const handleclick = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: to
    })
    const [date, setdate] = useState(null)
    setInterval(() => {
        const d = Date();
        setdate(d)
    }, 1000);
    return (
        <div className='w-50 bg-light' >
            <div className='container border border-2 my-3' style={{ width: '95%' }} ref={componentRef}>
                <div className='text-center mt-1 fs-6'>
                    <h2><i class="fa-solid fa-truck-moving"></i> {Tservice}</h2>
                    <p><i class="fa-solid fa-phone"></i> {Phnumber} <i class="fa-solid fa-location-dot"></i> {address}</p>
                </div>
                <hr />
                <div>
                    <div class="d-flex justify-content-start">From,</div>
                    <div class="d-flex justify-content-start">{from}</div>
                    <div class="d-flex justify-content-end">To,</div>
                    <div class="d-flex justify-content-end">{to}</div>
                </div>
                <hr />
                <table className='table table-striped'>
                    <caption> {date}</caption>

                    <thead>
                        <tr>
                            <th>Transport Charge</th>
                            <th>Service Charge</th>
                            <th>Quantity</th>
                            <th>Gst%</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{transportCharge}</td>
                            <td>{serviceCharge}</td>
                            <td>{quantity}</td>
                            <td>{gst}</td>
                            <td>{total}</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <div class="d-flex">
                    <div class="me-auto p-2">Service Provider _ _ _ _ _</div>
                    <div class="p-2">Costumer _ _ _ _ _</div>
                </div>
            </div>
            <button className='btn btn-primary m-3' onClick={handleclick}>print</button>
        </div>
    )
}
