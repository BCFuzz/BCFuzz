const v0 = `
    const v4 = new Uint32Array(/\u{12345}/myvis, Uint32Array, null);
    const v5 = delete v4[4];
    const o6 = {
    };
    o6.h = null;
    o6.c = v5;
`;
eval(v0);
gc();
