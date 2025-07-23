function f0() {
    return f0;
}
const v2 = Array();
const v4 = new Int32Array();
const v7 = new BigUint64Array();
class C8 extends Uint8Array {
}
function f10() {
    v7.byteOffset;
    const v13 = arguments.toString();
    new C8(v13, ...v4);
    let v15 = 1880;
    const v16 = new Uint32Array(v15);
    for (const v17 in v16) {
    }
    for (let i20 = 0, i21 = 10;
        (() => {
            const v22 = v15++;
            v22 | v22;
            i21--;
            return i20 < i21;
        })();
        ) {
        f0(...v2, v13, i20);
        createGlobalObject().Atomics.load(v16, i20);
    }
    return BigUint64Array;
}
f10();
f10();
gc();
