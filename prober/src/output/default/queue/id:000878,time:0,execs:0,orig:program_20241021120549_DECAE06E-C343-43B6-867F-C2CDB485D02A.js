class C0 {
}
const v1 = new C0();
class C2 {
}
const v3 = new C2();
const v4 = `
    v3.__proto__ = v1;
    const o7 = {
        "maxByteLength": 268435440,
    };
    const v9 = new SharedArrayBuffer(8, o7);
    new Uint8ClampedArray(v9);
`;
eval(v4);
gc();
