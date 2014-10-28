function Restaurant(name, type, options) {
  this.name = name;
  this.type = type;
  this.menu = options.menu || null;
  this.direction = options.direction || '';
}

module.exports = {
  Restaurant: Restaurant
};




/*function Customer(name,direction){
 this.name = name;
 this.direction = direction;
 
 }
 */
