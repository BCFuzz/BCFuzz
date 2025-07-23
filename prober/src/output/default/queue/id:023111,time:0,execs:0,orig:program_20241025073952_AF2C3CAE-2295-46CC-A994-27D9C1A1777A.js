const v2 = new Uint8ClampedArray();
const v3 = `
    /\u{12345}/myvis;
`;
v3.split(v2).join(eval);
gc();
