class C1 extends Float64Array {
}
const v2 = new C1();
function f3(a4, a5, a6, a7) {
    return a6[1];
}
f3[Symbol.species] = f3;
const v11 = [-628908.7150005228,-1000000000.0,9.00658937757623,-1.7976931348623157e+308,-1.5823755473732675,0.0,-2.2250738585072014e-308,-944.3126989422324,-2.2250738585072014e-308,0.3008712190265269];
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    a14.constructor = f3;
    try { a14.slice(); } catch (e) {}
}
const v19 = new F12(v11);
const t14 = v19.constructor;
new t14(v2);
gc();
