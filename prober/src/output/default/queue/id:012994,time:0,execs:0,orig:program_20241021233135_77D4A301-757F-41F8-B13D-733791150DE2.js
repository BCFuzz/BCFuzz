const v1 = new BigInt64Array();
const v7 = new WeakSet();
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F10(F10, F10, Array, WeakSet);
const v17 = `
    let v18 = 2;
    const v22 = (1 / Infinity) ** Infinity;
    let v23 = ++v18;
    const t10 = "e";
    delete t10[5];
    Array.__proto__ = v16;
    v23 = 7;
    v1[89] &&= v22;
    v7.valueOf = Array;
    Infinity - Infinity;
    const t16 = Date();
    t16.p10 = v22;
    const o30 = {
        "maxByteLength": 9,
    };
    const v32 = new SharedArrayBuffer(9, o30);
    const v34 = new Int8Array(v32);
    v34[7];
    class C36 extends Date {
        constructor(a38, a39) {
        }
    }
    ("matchAll")["repeat"](9);
    let v43 = -156631925;
    const v44 = "l" << Uint8ClampedArray;
    const v45 = Math.max("l");
    --v43;
    gc();
    +v44;
    [v45];
`;
eval(v17);
gc();
