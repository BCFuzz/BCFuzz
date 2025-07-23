const v2 = new Int32Array();
function f3(a4, a5) {
    Object.defineProperty("setUint8", 3, { configurable: true, enumerable: true, value: a4 });
    return a4;
}
v2.valueOf = f3;
try { v2.with(v2); } catch (e) {}
gc();
