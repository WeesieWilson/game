function Player(options) {
  var options = options || {};
  this.name = options.name || "Kim";
  // this.hairstyle = options.hairstyle || 1 ;
  this.selfie = options.selfie || 1;
  this.makeup = options.makeup || 100;
  this.botox = options.botox || 100;
  this.driverpoints = options.driverpoints || 100;
  this.missedSlap = 0;
  this.slap = function (sister) {
    this.damage(sister);
  };
  this.damage = function (sister) {
    var random = Math.floor(Math.random() * 10 + 1);
    console.log("DIS IS A SISTA: ",sister);
    if(random >2) {
      if(sister.makeup < 1) {
        console.log("Sorry, "+ sister.name +" you have to go home and apply more makeup");
      }
      if(this.weapon.accessory) {
        console.log(this)
        sister.makeup = sister.makeup - (this.makeup * this.weapon.strength);
        console.log("this is what is going on", sister.makeup)
        console.log(this.makeup);
        console.log(this.weapon.accessory.strength);
        console.log(this.makeup * this.weapon.strength)


        console.log('bam bam, you just got beat by a ' + this.weapon.accessory);
      } else {
        console.log( sister.name +" just slapped" + " " + this.name);
        this.makeup = this.makeup - sister.makeup;
      }
  } else {
    sister.missedSlap = sister.missedSlap + 1;
    console.log("you missed, try again!");
    // $('.kim').html('<iframe src="//giphy.com/embed/H9Cd2RSzorhPq"></iframe>');
  }

  };
  this.equip = function (accessory, strength) {
    this.weapon = new Accessory({accessory: accessory, strength: strength});
    console.log(this.name + "just bought a " + this.weapon.accessory)
  }

  this.getSelfie = function(){
    var selfiePoints = new Selfie();
    if (this.selfie > selfiePoints.selfie){
      console.log(this.name + 'took enough selfies to go back in public')
      this.makeup += 100;
    }
  }

  this.getBotox = function(){
    var botoxPoints = new Botox();
    if (this.botox > botoxPoints.botox){
      console.log(this.name + 'got botox today')
      this.makeup += 100;
    }
  }
}

function Accessory(options) {
  var options = options || {};

  this.accessory = options.accessory || "BlackBerry";
  this.strength = options.strength || 100;
}

function Selfie(options){
  var options = options || {};
  this.selfie = 50;

}

function Botox(options){
  var options = options || {};
  this.botox = 50;

}



// function Location(options) {
//   var options = options || {};
//   this.location = options.location || "Home";
//   this.team = options.team || "Samus";
//   this.power = options.power || 10;
//   this.misses = 0;
//   this.attack = function (enemy) {
//     enemy.damage(this);
//   };
//   this.damage = function (enemy) {
//     var random = Math.floor(Math.random() * 10 + 1);
//     if(random >4) {
//       if(this.health < 1) {
//         console.log("Sorry, "+ this.name +" is dead.");
//       }
//       if(enemy.weapon) {
//         this.health = this.health - (enemy.power * enemy.weapon.strength);
//         console.log('bam bam, you just got beat by a ' + enemy.weapon.name);
//       } else {
//         this.health = this.health - enemy.power;
//       }
//   } else {
//     enemy.misses = enemy.misses + 1;
//     console.log("you missed, try again!");
//   }
//
//   };
//   this.equip = function (name, strength) {
//     this.weapon = new Weapon({name: name, strength: strength});
//   }
// }


var kim = new Player({name: "Kim", selfie: 500, driverpoints: 500, makeup: 500});

var khloe = new Player({name: "Khloe", selfie: 400, makeup: 500 });

var kylie = new Player({name: "Kylie", selfie: 300, makeup: 500});

var kendall = new Player({name: "Kendall", selfie: 600, makeup: 500 });

var kourtney = new Player({name: "Kourtney", selfie: 700, makeup: 500});
