const v1 = new BigInt64Array();
const v7 = new WeakSet();
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F10();
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
    let v27 = 0;
    do {
        v27++;
    } while ((() => {
            for (let v30 = 0; v30 < 5; v30++) {
            }
            return v27 < 6;
        })())
    const v32 = Date();
    const o35 = {
        "maxByteLength": 9,
    };
    const v37 = new SharedArrayBuffer(9, o35);
    const v39 = new Int8Array(v37);
    v39[7];
    class C41 extends Date {
        constructor(a43, a44) {
            for (let v45 = 0; v45 < 5; v45++) {
                v32["p" + v45] = v45;
            }
        }
    }
    ("matchAll")["repeat"](9);
    let v51 = -156631925;
    const v52 = "l" << Uint8ClampedArray;
    Math.max("l");
    --v51;
    +v52;
`;
eval(v17);
gc();
