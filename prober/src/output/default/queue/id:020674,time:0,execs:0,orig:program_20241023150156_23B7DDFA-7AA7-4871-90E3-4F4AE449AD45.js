const o0 = {
};
const v1 = [o0,o0,o0,o0];
const v2 = `
    const v4 = v1.length;
    const v5 = Uint32Array === v4;
    if (!v5) {
        o0[v5] = v4;
    }
    /\u{12345}/myvis;
`;
eval(v2);
gc();
