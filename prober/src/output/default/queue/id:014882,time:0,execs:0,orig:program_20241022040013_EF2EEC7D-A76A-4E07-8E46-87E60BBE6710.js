function f0(a1, a2, a3, a4) {
    const o12 = {
        toString(a6, a7) {
            const v10 = new Int32Array(1000);
            v10.includes(a4, a7);
            return v10;
        },
    };
    return o12;
}
const v13 = f0();
try { v13.toString(v13, v13); } catch (e) {}
gc();
