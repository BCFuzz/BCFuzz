const v1 = new BigInt64Array();
function f2(a3, a4, a5, a6) {
}
f2[Symbol.species] = f2;
const v9 = [-628908.7150005228,-1000000000.0,9.00658937757623,-1.7976931348623157e+308,-1.5823755473732675,0.0,-2.2250738585072014e-308,-944.3126989422324,-2.2250738585072014e-308,0.3008712190265269];
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a12.constructor = f2;
    try { a12.slice(); } catch (e) {}
}
const v17 = new F10(v9);
const t11 = v17.constructor;
new t11(v1);
gc();
