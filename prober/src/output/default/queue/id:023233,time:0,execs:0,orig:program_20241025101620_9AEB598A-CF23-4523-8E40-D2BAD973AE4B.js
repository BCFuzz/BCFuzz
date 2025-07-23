const v1 = new Uint8ClampedArray();
const v2 = `
    /\u{12345}/myvis;
`;
const v4 = v2.split(v1);
v4.join(v4);
gc();
