const o1 = {
    "get": RegExp,
};
const v3 = new Proxy(RegExp, o1);
function f4(a5, a6) {
    const v9 = new SharedArrayBuffer(2659);
    new Uint16Array(v9);
    return o1;
}
v3.toString = f4;
const v13 = new Set();
try { v13.isSubsetOf(v3); } catch (e) {}
gc();
