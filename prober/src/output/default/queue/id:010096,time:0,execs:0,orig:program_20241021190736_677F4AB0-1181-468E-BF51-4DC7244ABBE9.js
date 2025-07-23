const v1 = new Uint8ClampedArray();
const v2 = `
    let {"buffer":v3,"byteOffset":v4,"g":v5,} = v1;
    v4 &&= v4;
`;
eval(v2);
gc();
