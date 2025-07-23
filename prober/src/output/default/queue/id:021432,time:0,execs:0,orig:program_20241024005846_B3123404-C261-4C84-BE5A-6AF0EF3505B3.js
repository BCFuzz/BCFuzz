function f1(a2, a3, a4) {
    const o10 = {
        toString(a6, a7) {
            const v9 = new Date(a2);
            return v9;
        },
    };
    return o10;
}
const v11 = f1();
const v14 = new Uint16Array(65535);
const v16 = new Float32Array(v14);
const v17 = new Int8Array(v16);
try { v17.lastIndexOf(v17, v11); } catch (e) {}
gc();
