orderLine =  {
    _product: 'espresso',
    _price: 2,
    _quantity: 10,
    get line(){
      if (this._product && this._price && this._quantity) {
        return `${this._product} ${this._price} EUR x ${this._quantity}`;
      }
    },

    get orderLineSum() {
      if (this._price && this._quantity) {
        return this._price*this._quantity;
      }
    }
  };

console.log(orderLine.line);
parseInt(console.log(orderLine.orderLineSum));
console.log(orderLine.line);
parseInt(console.log(orderLine.orderLineSum));

//how to save orderLineSum result into variable?
line1 = 10;
line2 = 10;
function subtotal() {
 return line1 + line2;
};
console.log('Subtotal: '+ subtotal() + ' EUR');

subtotal = 20;
const discount = 10;
function applyDiscount(num1, num2) {
  return  num2 - (num1 / 100 * num2);
};

console.log(`Discount: ${discount} %`);
console.log('Total: ' + applyDiscount(discount, subtotal) + ' EUR');

const paid = 100;
console.log(`Paid: ${paid} EUR`);
function calculateChange(cash, tot){
  if(cash < tot) {
    console.log('Wrong amount');
  } else
  {
    return paid - applyDiscount;
  }
}