const v0 = `
    const o1 = {
    };
    o1.e = o1;
    try { new Uint32Array(); } catch (e) {}
    const v7 = Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect]).reverse();
    /\u{12345}/myvis;
    const v9 = v7.indexOf(v0);
    v9 >> v9;
`;
eval(v0);
gc();
