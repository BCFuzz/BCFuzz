const v2 = new Uint8ClampedArray(4294967296);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = createGlobalObject().Float16Array.bind();
try { v8.apply(F3, v2); } catch (e) {}
gc();
