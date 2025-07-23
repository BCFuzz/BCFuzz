const v1 = [1000000000000.0];
const v2 = [0.3965627177443444,0.3965627177443444,0.3965627177443444,0.3965627177443444];
v2[5] = 0.3965627177443444;
function f3(a4, a5) {
    return v1;
}
f3[Symbol.species] = f3;
v2.constructor = f3;
v2.concat();
gc();
