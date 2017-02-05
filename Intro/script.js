// // // console.log('hello world')

// // // //Loosely typed 
// // // var name = 'dude'
// // // var age = 25
// // // var height = 6.2

// // // console.log(name, age,height)

// // // var hobbies = ['music', 'beer', 'gifs']

// // // console.log(hobbies)


// // var Bubble = function (posX, posY, size){

// // this.a = posX
// // this.b = posY
// // this.c = 0.5
// // }

// // // Bubble.prototype.update = function(newPosX, newPosY, acc){
// // // 	this.posX = newPosX
// // // 	//.................
// // // }

// // Bubble.prototype = {
// // 	update: function(newPosX, newPosY, acc){
// // 	this.posX = newPosX
// // 	//.................
// // 	}
// // 	display: function(){
// // 		console.log(this.posX)
// // 	}
// // }
// // var myBubble = new Bubble(0, 0, 20)
// // myBubble.update(10, 20, 30)
// // console.log(myBubble.c)




// // function makeCoffee(beans, water) {
// // 	grindBeans(beans)
// // 	addWater(water)
// // }

// // function grindBeans(beans){

// // }

// // function addWater(water){
// // 	//adds water to the mix
// // }


// var name = 'luke skywalker'
// // console.log(name)
// // console.log(name.length)

// var height = 6.5
// var rounded = Math.round(height)

// var isRad = 'true'
// // console.log(typeof(isRad))

// var elem = document.getElementById('para')
// console.log(elem.innerHTML)

// var courses = ['thesis', 'webjs', 'pcomp']


// for (var i=0; i < courses.length; i++){
// 	console.log(courses[i])
// }

// var thesis = {
// 	credits: 6;
// 	type: 'core',
// 	register: function(){
// 		console.log(this.credits)
// 	}
// }
// thesis.register()


////////////////////////////////////////////////////////////

// var inventory = ['chair', 'table', 'board']
// userCredit = true 


// while (inventory.length !=0){
// 	sell()
// 	console.log(inventory)
// }

// for (var i = 0; i < inventory.length; i++){
// 	sell()
// 	console.log(inventory)
// }

// function sell() {
// 	if (inventory.length > 0 && userCredit){
// 	console.log('SALE')
// 	console.log(inventory.pop())
// } else {
// 	console.log('no sale')
// 	}
// }

////////////////////////////////////////////////////////////

// var difficulty = 'med'

// switch (difficulty) {
// 	case 'hard':
// 		console.log("No way!")
// 		break
// 	case 'med':
// 		console.log("I can live with this")
// 		break
// 	case 'low':
// 		console.log("Piece of cake")
// 		break
// 	default:
// 		console.log("enter a valid option")
// 		break
// }


////////////////////////////////////////////////////////////


try {
	add('bogus', 'bananas')
} catch(e){
	console.log('caught error: ', e.name, 'with message: ', e.message)
}

var c = add (3, "test")
console.log(c)
function add (a,b){
	// (!a) means, a does not have a value. (isNaN(a)) not a number? 
	if (!isNaN(a) && !isNaN(b)){
		return a+b
	} else {
		var err = {
			name: "number exception"
			message: "Do not do this"
		}
		throw err
	}
}





















