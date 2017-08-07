function Phone(brand, price, color, camera, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.camera = camera;
	this.weight = weight;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.mpix = function() {
	console.log("The phone camera has " + this.camera + ".");
}
Phone.prototype.gr = function() {
	console.log("The phone weight is " + this.weight + "grams.");
}

var samsungGalaxyS6 = new Phone("Samsung", 1800, "gold", "10Mpix","155");
var iPhone6S = new Phone("Apple", 2250, "silver","13Mpix", "150");
var onePlusOne = new Phone("One", 1900, "blue", "13.5Mpix", "162");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();

samsungGalaxyS6.mpix();
iPhone6S.mpix();
onePlusOne.mpix();

samsungGalaxyS6.gr();
iPhone6S.gr();
onePlusOne.gr();