let v0 = 4294967297;
const v2 = new Uint16Array();
let v3 = `
    ({"byteOffset":v3,"length":v0,} = v2);
    /\u{12345}/myvis;
`;
eval(v3);
gc();
