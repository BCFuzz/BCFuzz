const v0 = `
    /\u{12345}/myvis;
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        try { a7.toString(this, Uint8Array, a8, Uint8Array, v0); } catch (e) {}
        a8 ^ a8;
        Object.defineProperty(this, "constructor", { writable: true, configurable: true, value: Symbol });
    }
    const v11 = [-1,9,4294967296,65536,10,49592,10];
    const v13 = [];
    const v15 = Reflect.apply(v11.sort, v11, v13);
    v15[986] = Uint8Array;
    v15.join(Reflect).replace(F4);
`;
eval(v0);
gc();
