function f0(a1, a2, a3) {
    const o9 = {
        toString(a5, a6) {
            const v8 = new Date();
            return v8;
        },
    };
    return o9;
}
const v10 = f0();
const v13 = new Uint16Array(65535);
const v15 = new Float32Array(v13);
const t12 = v15.constructor;
const v17 = new t12(v15);
try { v17.lastIndexOf(v17, v10); } catch (e) {}
gc();
