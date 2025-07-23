const v1 = -2.2250738585072014e-308 >>> -2.2250738585072014e-308;
const o4 = {
    "maxByteLength": 10000,
};
const v6 = new ArrayBuffer(4, o4);
const v8 = new Uint16Array(v6, v1, -2.2250738585072014e-308);
function f9(a10) {
    Object.defineProperty(v8, 3144089331, { configurable: true, get: f9 });
    return a10;
}
function f11(a12) {
    return a12;
}
f11[Symbol.iterator] = f9;
const v17 = createGlobalObject().Float16Array;
try { new v17(f11); } catch (e) {}
gc();
