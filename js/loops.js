'use strict';
//PĘTLE- pozwalają wykonać dany kod pewną ilość razy//

//są 2 typy pętli: for i while //

//for ( var i=4; i> -1; i--){
//    console.log(i);
//}

//for używamy gdy znamy liczbę powtórzeń, a gdy jej nie znamy używamy while//

//while//

//var it= 0;
//while ( it < 5) {
//    console.log(it);
//    it++;
//}

//do while, dziala tak samo jak while, ale raz sie wykona, nawet jesli wynik bedzie falszywy//


//petal do while//


var iter=20;
do {
    console.log(iter);
    iter++;
    //console.log(iter);
} while (iter <10 );


//przerywanie pętli-break//

var a =0;
while ( a < 10 ){
    console.log(++a);
    
    if ( a ==5){
        break;
    }
}











