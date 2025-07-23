const v0 = `
    /\u{12345}/myvis;
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = [-1,9,4294967296,65536,10,49592,10];
    const v10 = [];
    const v12 = Reflect.apply(v8.sort, v8, v10);
    v12[986] = Uint8Array;
    v12.join(Reflect).replace(F3);
`;
eval(v0);
gc();
