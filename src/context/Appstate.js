import React, { useState } from "react";
import Context from "./Context";
import userData from "../Data/users.json"
// import MainApp from "../MainApp";

const Appstate = (props) => {
    const [items, setitems] = useState([])
    const [totalAmt, settotalAmt] = useState(0)
    const [details, setdetails] = useState({ Tservice: 'Amazon Transport', Phnumber: '1234567890', address: 'balaji nagar shingave' })

    const addBill = (transportCharge, serviceCharge, gst, quantity) => {
        const totalBill = parseInt(transportCharge) + parseInt(serviceCharge);
        const totalprice = totalBill * parseInt(quantity)
        const gstAmmount = (totalprice * parseInt(gst)) / 100;
        const netPrice = totalprice + gstAmmount
        // settotal(netPrice);
        const obj = {
            id: items.length + 1,
            itransportCharge: transportCharge,
            iserviceCharge: serviceCharge,
            iquantity: quantity,
            igst: gst,
            total: netPrice
        }
        items.push([...items, obj])
        settotalAmt(totalAmt + netPrice)
        //console.log(totalAmt)
    }

    const Adduser = (transportService, email, password) =>{
        const userId = userData.length + 1;
        const newData = {id: userId, transportServiceName : transportService, Email: email , Password:password};
        const json = JSON.stringify(newData);
        console.log(json)
        userData.push(newData)
        console.log(userData)
    }

    return (
        <Context.Provider value={{ addBill, details, setdetails, Appstate, items, totalAmt, setitems, userData, Adduser }}>
            {props.children}
        </Context.Provider>
    )

}

export default Appstate;
