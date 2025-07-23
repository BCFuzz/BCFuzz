function f0() {
    const o5 = {
        valueOf(a2) {
            new Int8Array(this, a2);
            return a2;
        },
    };
    return o5;
}
const v6 = f0();
gc();
f0 <= v6;
gc();
