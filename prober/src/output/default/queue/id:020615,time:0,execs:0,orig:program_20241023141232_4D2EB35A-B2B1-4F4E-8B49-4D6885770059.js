const v0 = [-9223372036854775807,9223372036854775807,1073741825,1000,-11];
function f1(a2, a3) {
    function f4(a5, a6) {
        return a5;
    }
    function f7(a8, a9) {
        const t6 = createGlobalObject().Float16Array;
        const v13 = new t6(v0);
        new Uint8ClampedArray(v13);
    }
    f4[Symbol.toPrimitive] = f7;
    f4.hasOwnProperty(f4);
}
const v19 = [-1.0762406408432525,1000000000.0,0.6213721562587075,782.7679097498537,-1000000.0,-5.5966938420514044e+306,0.6388213605066118,-450147.7870259767,343.74974855238474];
const v20 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
v20[Symbol.toPrimitive] = f1;
const o23 = {
    [v20]: v19,
};
gc();
