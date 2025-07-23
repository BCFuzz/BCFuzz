const o2 = {
    "maxByteLength": 10000,
};
const v4 = new ArrayBuffer(4, o2);
const v6 = new Int16Array(v4);
function f7(a8) {
    Object.defineProperty(v6, 3144089331, { configurable: true, get: f7 });
    return a8;
}
function f9(a10) {
    return f9;
}
f9[Symbol.iterator] = f7;
const v15 = createGlobalObject().Float16Array;
try { new v15(f9); } catch (e) {}
gc();
