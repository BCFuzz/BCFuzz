let v1 = undefined;
const v3 = new Uint8ClampedArray();
let v4 = `
    ({"b":v1,"byteLength":v1,"byteOffset":v4,} = v3);
    let [v5,...v6] = "c";
`;
eval(v4);
gc();
