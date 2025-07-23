const v2 = new Int8Array(8);
class C5 extends Float64Array {
}
const v6 = [-628908.7150005228,-1000000000.0,9.00658937757623,-1.7976931348623157e+308,-1.5823755473732675,0.0,-2.2250738585072014e-308,-944.3126989422324,-2.2250738585072014e-308,0.3008712190265269];
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    a9.constructor = a11;
    a9.slice(this, 8, a12, a12, a10);
}
const v14 = new F7(v6);
const t10 = v14.constructor;
new t10(v2, C5, Uint16Array);
gc();
