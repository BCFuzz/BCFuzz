const t0 = createGlobalObject().Float16Array;
const v4 = new t0(256);
function f7() {
    return Float64Array;
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(v4, a11, { configurable: true, get: f7, set: f7 });
}
const v12 = new F8(12, v4);
const v13 = v12.constructor;
try { new v13(Float64Array, 12); } catch (e) {}
gc();
