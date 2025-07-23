function f0() {
    const o7 = {
        toString(a3) {
            const v5 = new Int8Array();
            v5.toString = f0;
            -288696175 << v5;
            return -288696175;
        },
    };
    return o7;
}
const v8 = f0();
try { Number(v8); } catch (e) {}
gc();
