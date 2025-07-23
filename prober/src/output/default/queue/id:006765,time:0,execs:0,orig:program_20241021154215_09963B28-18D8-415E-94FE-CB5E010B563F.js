const v0 = /Nfoo|(bar|baz)|quux/dgi;
const v3 = new BigUint64Array(0);
const v5 = `
    const v8 = new WeakMap();
    const v10 = 2 + 2;
    if (v8 >= ~16) {
    } else {
        const v14 = [v0,v3,v10];
        try { v14.slice(v14, v5); } catch (e) {}
        const v16 = [2];
        [BigInt64Array,v16,v16];
    }
    1109 + 1109;
`;
const v21 = eval(v5);
v21.length = v21;
gc();
