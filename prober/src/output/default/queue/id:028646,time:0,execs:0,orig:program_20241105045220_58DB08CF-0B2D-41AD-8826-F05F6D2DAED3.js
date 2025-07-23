for (let i3 = 0, i4 = 10 + 10; i4--, i3 < i4;) {
}
const v13 = new Int16Array();
function f14() {
    let v15 = 1880;
    const v16 = v15--;
    const o17 = {
    };
    try { o17.call(); } catch (e) {}
    for (let i21 = 0, i22 = 10; i22--, i21 < i22;) {
        const v31 = createGlobalObject().Atomics;
        try { v31.xor(v13, i21, v16); } catch (e) {}
        Math.imul(Uint32Array, -422222970);
    }
    const v38 = new Uint8Array(3129);
    for (const v39 in v38) {
    }
    return f14;
}
f14();
gc();
