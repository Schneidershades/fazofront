(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{4431:function(e,t,a){"use strict";var s=a("a51d"),i=a.n(s);i.a},"77d9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-img",{staticStyle:{height:"200px"}},[a("div",{staticClass:"absolute-full text-subtitle2 flex flex-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 q-pa-sm"},[e.selectedOneWayFlight?a("h6",{staticClass:"text-center",staticStyle:{padding:"12px","background-color":"#0d47a1","font-weight":"700"}},[e._v("\n            Time : "+e._s(e.selectedOneWayFlight.message.FlightSummaryModel.FlightCombination.FlightModels[0].FlightLegs[0].StartTime)+" - "+e._s(e.selectedOneWayFlight.message.FlightSummaryModel.FlightCombination.FlightModels[0].FlightLegs[0].EndTime)+"\n            "),a("br"),e._v("\n          Flight Schedule : "+e._s(e.selectedOneWayFlight.message.FlightSummaryModel.FlightCombination.FlightModels[0].FlightLegs[0].DestinationName)+" - "+e._s(e.selectedOneWayFlight.message.FlightSummaryModel.FlightCombination.FlightModels[0].FlightLegs[0].DepartureName))]):e._e()])])])]),a("div",{staticClass:"q-pa-sm row"},[e.selectedOneWayFlight?a("div",{staticClass:"q-gutter-y-md col-12 col-md-12"},[a("h5",{staticClass:"q-pa-md"},[e._v("Generated Booking ID : "+e._s(e.selectedOneWayFlight.message.BookingId))]),a("q-card",{staticClass:"my-card",attrs:{flat:""}},[e.flights?a("table",[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("Passenger Type")]),a("th",{attrs:{scope:"col"}},[e._v("Name")]),a("th",{attrs:{scope:"col"}},[e._v("Gender")]),a("th",{attrs:{scope:"col"}},[e._v("Class")])])]),a("tbody",[e._l(e.passengerFlightDetails,(function(t,s){return a("tr",{key:s},[a("td",{attrs:{"data-label":"Type"}},[e._v("\n                "+e._s(t.PassengerType)+"\n              ")]),a("td",{attrs:{"data-label":"Name"}},[e._v("\n                "+e._s(t.Title)+" "+e._s(t.FirstName)+" "+e._s(t.MiddleName)+" "+e._s(t.LastName)+"\n              ")]),a("td",{attrs:{"data-label":"Gender"}},[e._v("\n                "+e._s(t.Gender)+"\n              ")]),a("td",{attrs:{"data-label":"Class"}},[e._v("\n                "+e._s(t.DateOfBirth)+"\n              ")])])})),a("tr",[a("td",{attrs:{colspan:"2"}},[a("q-btn",{attrs:{label:e.payWithCardAmountLabel,color:"primary"},on:{click:e.makePayment}})],1),a("td",{attrs:{colspan:"2"}},[a("q-btn",{staticClass:"q-px-md",attrs:{type:"submit",unelevated:"",color:"red",label:"Cancel"}})],1)])],2)]):e._e()])],1):e._e()])],1)},i=[],n=a("ded3"),l=a.n(n),o=a("2f62"),c=a("b178"),r=(c["f"].getScrollTarget,{data:function(){return{disable:!1,sub:[],paymentContent:[]}},computed:l()(l()({},Object(o["c"])({flights:"flight/flights",selectedOneWayFlight:"flight/selectedOneWayFlight",searchInputs:"flight/searchInputs",dataFlight:"flight/dataFlight",passengerFlightDetails:"flight/passengerDetails"})),{},{payAmount:function(){return this.selectedOneWayFlight.message.FlightSummaryModel.FlightCombination.Price.Amount},payWithCardAmountLabel:function(){return"Pay "+this.selectedOneWayFlight.message.FlightSummaryModel.FlightCombination.Price.CurrencyCode+this.selectedOneWayFlight.message.FlightSummaryModel.FlightCombination.Price.Amount+" with card "}}),methods:l()(l()({},Object(o["b"])({sendPassengerDetails:"flight/passengerDetails",getBookingId:"flight/getBookingDetails",gatewayResponse:"flight/paymentProcess",saveGatewayResponse:"flight/savePaymentResponse"})),{},{makePayment:function(){var e=this;window.FlutterwaveCheckout({public_key:"FLWPUBK_TEST-c0fa333030404fd962eb864d1f25bcf2-X",tx_ref:this.selectedOneWayFlight.message.BookingId,amount:this.selectedOneWayFlight.message.FlightSummaryModel.FlightCombination.Price.Amount,currency:"NGN",payment_options:"card,mobilemoney,ussd",customer:{email:"admin@fazotravels.ng",phonenumber:"08102909304",name:"yemi desola"},callback:function(t){return e.callback(t)},customizations:{title:"Fazo Flight Payment",description:"Payment for Flight Booking ID"+this.selectedOneWayFlight.message.BookingId,logo:"https://klestudio.com/fazotravels/wp-content/uploads/2018/02/fazo-website-logo-light.png"}})},submitTransactions:function(){return this.sendPassengerDetails(this.lines),this.$router.push({name:"flightPayment"})},callback:function(e){console.log(e),alert("2"),this.sendPaymentInfo(e)},sendPaymentInfo:function(e){alert(e.tx_ref);var t={payment_reference:e.tx_ref,bookingId:e.tx_ref,bookingData:this.selectedOneWayFlight.message.SelectData,passengerDetails:this.passengerFlightDetails,targetCurrency:this.selectedOneWayFlight.message.FlightSummaryModel.FlightCombination.Price.CurrencyCode};this.gatewayResponse(t).then((function(e){alert("click ok to continue")})).catch((function(e){console.log(e)}))},positiveNotification:function(e){c["b"].create({type:"positive",color:"positive",timeout:3e3,position:"center",message:e})},negativeNotification:function(e){c["b"].create({type:"negative",color:"negative",timeout:3e3,position:"center",message:e})}}),mounted:function(){var e=document.createElement("script");e.src=this.isProduction?"https://checkout.flutterwave.com/v3.js":"https://ravemodal-dev.herokuapp.com/v3.js",document.getElementsByTagName("head")[0].appendChild(e),this.selectedOneWayFlight}}),g=r,d=(a("4431"),a("2877")),h=Object(d["a"])(g,s,i,!1,null,"7b105cf2",null);t["default"]=h.exports},a51d:function(e,t,a){}}]);