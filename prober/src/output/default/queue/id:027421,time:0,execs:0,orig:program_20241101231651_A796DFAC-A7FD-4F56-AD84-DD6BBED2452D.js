for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = `
    const v11 = /\u{12345}/myvis;
    function F14(a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        F14 >> v11;
        const o22 = {
            "maxByteLength": 2212,
        };
        const v24 = new ArrayBuffer(2212, o22);
        new BigUint64Array(v24);
        try { a17.toString(this, Uint8Array, a18, Uint8Array, v10); } catch (e) {}
        a18 ^ a18;
        Object.defineProperty(this, "constructor", { writable: true, configurable: true, value: Symbol });
    }
    const v29 = [-1,9,4294967296,65536,10,49592,10];
    const v31 = [];
    const v33 = Reflect.apply(v29.sort, v29, v31);
    v33[986] = Uint8Array;
    v33.join(Reflect).replace(F14);
`;
eval(v10);
gc();
