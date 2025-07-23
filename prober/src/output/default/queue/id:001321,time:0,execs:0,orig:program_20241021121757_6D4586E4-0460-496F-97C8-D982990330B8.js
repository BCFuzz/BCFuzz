new Int16Array(9);
const v5 = new Float32Array(2663);
const v8 = new Uint8Array(0);
function f9(a10, a11, a12, a13) {
}
f9(0, 9, 2663, 2663);
const v15 = f9(9, 9, 0, 0);
const v16 = f9(2663, 2663, v8, 2663);
f9 >>= f9;
for (const v17 in v5) {
    function f18(a19, a20, a21, a22) {
        const o23 = {
            ...v8,
            "c": v17,
        };
        return o23;
    }
    const v24 = f18(9, f9, v15, v16);
    f18();
    f18(9, f9, v24);
}
gc();
