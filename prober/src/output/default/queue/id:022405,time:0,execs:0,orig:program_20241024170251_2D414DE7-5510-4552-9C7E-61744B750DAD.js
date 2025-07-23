const v0 = [-913.3337888178253,1.0,-1000000000000.0,-1.0,7.307273327631435e+307,5.0,NaN];
const v2 = new BigUint64Array();
const v3 = v2.constructor;
const v4 = new v3(v2, BigUint64Array, v2, v0);
function f5(a6, a7, a8, a9) {
    return a9;
}
f5[Symbol.species] = v3;
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    a14.constructor = f5;
    a14.slice();
}
const v19 = new F12(v4);
const v20 = v19.constructor;
try { new v20(v0); } catch (e) {}
gc();
