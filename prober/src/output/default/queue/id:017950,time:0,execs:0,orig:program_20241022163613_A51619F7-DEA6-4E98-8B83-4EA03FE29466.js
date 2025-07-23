const v1 = new Int32Array(Int32Array);
function f2(a3, a4, a5, a6) {
    a5[1];
    return a6;
}
f2[Symbol.species] = f2;
const v10 = [-628908.7150005228,-1000000000.0,9.00658937757623,-1.7976931348623157e+308,-1.5823755473732675,0.0,-2.2250738585072014e-308,-944.3126989422324,-2.2250738585072014e-308,0.3008712190265269];
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    a13.constructor = f2;
    try { a13.slice(a16, a16); } catch (e) {}
}
const v18 = new F11(v10);
const t13 = v18.constructor;
new t13(v1);
gc();
