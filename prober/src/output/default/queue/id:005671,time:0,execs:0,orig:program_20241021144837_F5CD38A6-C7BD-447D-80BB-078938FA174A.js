function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const o6 = {
        "maxByteLength": 1953043059,
    };
    const v8 = new ArrayBuffer(7, o6);
    const v10 = new Uint8Array(v8);
    v10[3] = v10;
}
const v11 = new F0(F0, F0);
const v12 = v11.constructor;
const v13 = new v12(F0, F0, v11, F0);
new F0(v13, v12);
gc();
