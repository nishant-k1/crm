import quoteCss from './quoteCss'

const { itemRowArray, values, currentLongDate } = global.quoteData
const {day, month, date, year} = currentLongDate
const itemRows = itemRowArray.map((element, {index} )=> {
  const {item, desc, qty, rate, amount} = element
  return (
    
    `<ul key=${index} id=${index} class='items-list'>
      <li>
        <p>${item}</p>
      </li>
      <li>
        <p>${desc}</p>
      </li>
      <li>
        <p>${qty}</p>
      </li>
      <li>
        <p>${rate}</p>
      </li>
      <li>
        <p>${amount}</p>
      </li>
    </ul>`
  )
}).join('')

const quoteHtml = `
  <html>
    <head>
      <style>
        ${quoteCss}
      </style>
    </head>
    <body>
      <div class="section-1">
        <img src="roundlogo.png" />
        <div class="section-1-right">
          <h1>Quote # ${values.quoteNumber}</h1>
          <h3>${day} ${month} ${date}, ${year}</h3>
        </div>
      </div>
      <hr/>
      <div class="section-2">
        <div class='section-2-left'>
          <div>
            <h3>Customer Name</h3>
            <p>${values.fullName}</p>
          </div>
          <div>
            <h3>Company Name</h3>
            <p>${values.cName}</p>
          </div>
          <div>
            <h3>Delivery Address</h3>
            <p>${values.streetAddress}</p>
            <p>${values.city} ${values.state} ${values.zip}</p>
          </div>
        </div>

        <div class='section-2-right'>
          <div>
            <h3>Delivery Date</h3>
            <p>${values.deliveryDate}</p>
          </div>
          <div>
            <h3>Pickup Date</h3>
            <p>${values.pickupDate}</p>
          </div>
        </div>
      </div>
    
      <div class='section-3'>
        <ul class='items-heading'>
          <li>
            <h3>ITEMS</h3>
          </li>
          <li>
            <h3>DESCRIPTION</h3>
          </li>
          <li>
            <h3>QTY</h3>
          </li>
          <li>
            <h3>PRICE</h3>
          </li>
          <li>
            <h3>TOTAL</h3>
          </li>
        </ul>
          ${itemRows}
        <div>
          <h4>Total Amount</h4><p>$ ${`195`}</p>
        </div>
      </div>
      <hr/>
      <div class='section-4'>
        <div>
          <h3>Long Term Use</h3>
          <ul>
            <li>Billing Cycle Period is 28 Days.</li>
            <li>Includes weekly once cleaning service.</li>
            <li>If the service is extended after the end of the first billing cycle period then same amount will be charged for the next month.</li>
          </ul>
        </div>
        <div>
          <h3>Short Term Use</h3>
          <ul>
            <li>During weekends we deliver on Friday and pickup on Monday.</li>
            <li>During normal days, we deliver a day before your event and pickup the day after your event.</li>
          </ul>
        </div>
      </div>
      <footer>
        <ul>
          <li><a href='https://www.rentaporta.com/'>www.rentaporta.com</a></li>
          <li><a href="mailto:support@rentaporta.com">support@rentaporta.com</a></li>
          <li><a href="tel:+18557803061">(855) 780-3061</a></li>
        </ul>
      </footer>
    </body>
  </html>
`

export default quoteHtml