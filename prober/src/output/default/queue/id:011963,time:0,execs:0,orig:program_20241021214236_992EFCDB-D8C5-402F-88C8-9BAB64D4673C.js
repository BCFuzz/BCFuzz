let v0 = 1992522195;
let v1 = WeakMap;
const v3 = new BigInt64Array();
const v4 = `
    let v5 = 127;
    [v5,v1,,v0] = v3;
    /\u{12345}/myvis;
`;
eval(v4);
gc();
