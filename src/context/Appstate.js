import React, { useState } from "react";
import Context from "./Context";


const Appstate = (props) => {
    const [bills, setbills] = useState({ ifrom: '', ito: '', itransportCharge: '', iserviceCharge: '', iquantity: '', igst: '', total: '' })
    const [total, settotal] = useState(0);
    const [details, setdetails] = useState({ Tservice: 'Bablu Transport', Phnumber: '1234567890', address: 'balaji nagar shingave' })

    const items = [{
        from: 'sfsdfdd',
        to: 'fsffsdf',
        transport_charge: 12,
        service_charge: 12,
        quantity: 5,
        gst: 3,
        total: 233
    }
        , {
        from: 'sfsdfdd',
        to: 'fsffsdf',
        transport_charge: 12,
        service_charge: 12,
        quantity: 5,
        gst: 3,
        total: 233
    }]

    const addBill = (from, to, transportCharge, serviceCharge, gst, quantity) => {
        const Charge = parseInt(transportCharge);
        const sCharge = parseInt(serviceCharge)
        const Gst = parseInt(gst)
        const totalBill = Charge + sCharge;
        const totalprice = totalBill * parseInt(quantity)
        const gstAmmount = (totalprice * Gst) / 100;
        const netPrice = totalprice + gstAmmount
        settotal(netPrice)
        setbills({
            ifrom: from,
            ito: to,
            itransportCharge: Charge,
            iserviceCharge: sCharge,
            iquantity: parseInt(quantity),
            igst: Gst,
            total: netPrice
        })
        console.log(bills)
    }
    return (
        <Context.Provider value={{ bills, addBill, total, details, setdetails }}>
            {props.children}
        </Context.Provider>
    )

}

export default Appstate;
