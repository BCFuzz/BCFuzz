const v0 = /\xed\xb0\x80[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]a+/dyi;
const v3 = new Int32Array(1);
const v5 = new Uint32Array(v3, 1);
function f6(a7) {
    Math.cbrt(v0);
    Math.hypot(v5 && v5);
    return v5;
}
v5.toString = f6;
try { v3.indexOf(Int32Array, v5); } catch (e) {}
gc();
