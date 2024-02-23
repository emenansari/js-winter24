const user = {
  // define your properties below:
  firstName: "emen",
  phone: {
    cell: "000-111-2222",
    home: "111-222-3333",
  },
  email: "emen@gmail.com",
  website: "www.website.com",
  age: 22,
  cart: ["grapes"],

  // define your methods below:

  getName: function () {
    return this.firstname;
  },

  getPhone: function () {
    return this.phone;
  },

  getEmail: () => {
    return this.email;
  },

  addtoCart: (item) => {
    return this.cart.push(item);
  },

  removeFromCart: (item) => {
    return this.cart.remove(item);
  },

  addNewPhone: (phoneType, phoneNumber) => {
    return this, (phone[phoneType] = phoneNumber);
  },

  updateNewPhone(phooneType, newPhoneNumber) {
    if (this.phone(phoneType)) {
      this.phone[phoneType] = newPhoneNumber;
      return this.phone;
    }
  },
};
