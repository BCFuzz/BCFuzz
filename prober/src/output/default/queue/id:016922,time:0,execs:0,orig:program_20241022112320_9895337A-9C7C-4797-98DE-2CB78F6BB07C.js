const v1 = new BigInt64Array();
let v3;
try { v3 = Int32Array.from(); } catch (e) {}
const v6 = `
    ("-13")[undefined];
    for (const v10 in v3) {
        WeakMap()[v10];
    }
    const v16 = Reflect.construct(Uint32Array, [BigInt64Array,BigInt64Array,BigInt64Array]);
    const v18 = v16.reverse(v16, Reflect).forEach;
    /\u{12345}/myvis;
    [-1,v1,v18,,];
`;
eval(v6);
gc();
