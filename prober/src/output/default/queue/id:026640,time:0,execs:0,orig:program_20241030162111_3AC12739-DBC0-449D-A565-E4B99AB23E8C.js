const v0 = `
    /\u{12345}/myvis;
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        this.constructor;
    }
    const v9 = [-1,9,4294967296,65536,10,49592,10];
    const v11 = [];
    const v13 = Reflect.apply(v9.sort, v9, v11);
    v13[986] = Uint8Array;
    v13.join(Reflect).replace(F3);
`;
eval(v0);
gc();
