const v1 = new Uint8ClampedArray();
const v2 = `
    /\u{12345}/myvis;
`;
v2.split(v1);
gc();
