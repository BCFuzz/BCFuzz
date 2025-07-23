const o0 = {
};
function f1(a2) {
    const o5 = {
        "maxByteLength": 3472752128,
    };
    const v7 = new SharedArrayBuffer(8, o5);
    const v9 = new Int8Array(v7);
    v9.sort();
    return v7;
}
Object.defineProperty(o0, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f1 });
try { new Uint32Array(o0); } catch (e) {}
gc();
