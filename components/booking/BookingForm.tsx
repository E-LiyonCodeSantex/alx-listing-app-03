const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <input id="phone-number" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label htmlFor="card-number">Card Number</label>
        <input id="card-number" type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="expry-date">Expiration Date</label>
          <input id="expry-date" type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label htmlFor="strt-address">Street Address</label>
        <input id="strt-address" type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="city">City</label>
          <input id="city" type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input id="state" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input id="country" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;