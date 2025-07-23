function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const o6 = {
        "maxByteLength": 213,
    };
    const v8 = new ArrayBuffer(213, o6);
    const v10 = new Int8Array(v8);
    v10.includes(F0, a2);
}
Reflect.construct(F0, [Reflect,Reflect,Reflect]);
gc();
