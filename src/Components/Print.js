import React, { useRef, useContext, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Context from '../context/Context';
export const Print = (props) => {
    const {details, items, totalAmt } = useContext(Context);
    const { Tservice, Phnumber, address } = details
    const { from, to } = props.inputes;
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
                    <h2><i className="fa-solid fa-truck-moving"></i> {Tservice}</h2>
                    <p><i className="fa-solid fa-phone"></i> {Phnumber} <i className="fa-solid fa-location-dot"></i> {address}</p>
                </div>
                <hr />
                <div>
                    <div className="d-flex justify-content-start">From,<br />{from}</div>
                    <div className="d-flex justify-content-end">To,<br />{to}</div>
                </div>
                <hr />
                <table className='table table-striped'>
                    <caption>{date}</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transport Charge</th>
                            <th>Service Charge</th>
                            <th>Quantity</th>
                            <th>Gst%</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>{transportCharge}</td>
                            <td>{serviceCharge}</td>
                            <td>{quantity}</td>
                            <td>{gst}</td>
                            <td>{total}</td>
                        </tr> */}

                        {
                            items ? items.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item[index].id}</td>
                                    <td>{item[index].itransportCharge}</td>
                                    <td>{item[index].iserviceCharge}</td>
                                    <td>{item[index].iquantity}</td>
                                    <td>{item[index].igst}</td>
                                    <td>{item[index].total}</td>
                                </tr>
                            }) : null
                        }
                    </tbody>
                </table>
                <hr />
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Service Provider _ _ _ _ _</th>
                        <th>Costumer _ _ _ _ _</th>
                        <th>Total: {totalAmt}</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <button className='btn btn-primary m-3' onClick={handleclick}>print</button>
        </div>
    )
}
