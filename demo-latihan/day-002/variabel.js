//VAR
//masalah dengan var
// 1. reassign
var zoo = 'harimau';
var zoo = 'kelinci';
console.log(zoo);

//2. hoisting
x=9
var x // --> var x = 9
console.log(x);

//3. scope
function looping(){
    for (var i = 0; i < 6; i++){
        console.log(i);
        
    }
    function inLooping(){
        console.log(i);
        
    }    
    inLooping();
}
looping();


