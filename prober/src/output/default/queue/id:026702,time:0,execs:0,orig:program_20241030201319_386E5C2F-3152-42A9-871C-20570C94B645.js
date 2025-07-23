const o3 = {
    "maxByteLength": 1024,
};
const v5 = new SharedArrayBuffer(1024, o3);
const v7 = new Uint8ClampedArray(v5);
const v10 = [/\P{scx=Greek}/gisu,NaN,41994];
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = a14 + a14;
    function f16(a17, a18, a19, a20) {
        Object.defineProperty(v7, a19, { get: f16 });
        return this;
    }
    try { f16.apply(v15, v10); } catch (e) {}
}
new F11(o3, 1024);
gc();
