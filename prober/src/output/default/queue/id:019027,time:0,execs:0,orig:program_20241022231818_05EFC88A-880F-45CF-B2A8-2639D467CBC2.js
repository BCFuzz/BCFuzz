const v1 = new Int8Array();
class C3 extends Float64Array {
}
const v4 = new C3();
function f5(a6, a7, a8, a9) {
    return a6;
}
const v10 = [-628908.7150005228,-1000000000.0,9.00658937757623,-1.7976931348623157e+308,-1.5823755473732675,0.0,-2.2250738585072014e-308,-944.3126989422324,-2.2250738585072014e-308,0.3008712190265269];
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    a13.constructor = f5;
    let v17;
    try { v17 = a13.slice(); } catch (e) {}
    f5 %= v17;
}
const v18 = new F11(v10);
const v19 = v18.constructor;
new v19(v1);
new v19(v4);
gc();
