const v1 = new Uint8ClampedArray();
const v2 = `
    let {"buffer":v3,"byteOffset":v4,"g":v5,} = v1;
    v3.transfer();
`;
eval(v2);
gc();
