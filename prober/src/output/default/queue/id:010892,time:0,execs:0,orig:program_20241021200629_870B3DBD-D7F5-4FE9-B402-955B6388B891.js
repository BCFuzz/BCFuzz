let v1 = 29506;
const v2 = `
    const o3 = {
    };
    o3["bigint"] = Uint32Array;
    v1 -= 3;
    /\u{12345}/myvis;
`;
eval(v2);
gc();
