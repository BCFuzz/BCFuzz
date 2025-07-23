const o0 = {
};
function f1(a2) {
    const v4 = new SharedArrayBuffer();
    const v6 = new Int8Array(v4);
    v6.sort();
    return v6;
}
Object.defineProperty(o0, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f1 });
try { new Uint32Array(o0); } catch (e) {}
gc();
