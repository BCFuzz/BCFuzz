const v0 = `
    try { Uint32Array(); } catch (e) {}
    const v6 = Reflect.construct(Uint32Array, []).reverse();
    /\u{12345}/myvis;
    const v8 = v6.indexOf();
    v8 >> v8;
`;
eval(v0);
gc();
