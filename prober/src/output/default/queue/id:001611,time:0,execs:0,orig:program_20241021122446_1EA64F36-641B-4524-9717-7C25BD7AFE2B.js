function f0() {
    const o5 = {
        valueOf(a2) {
            new Set(a2);
            return f0;
        },
    };
    return o5;
}
const v6 = f0();
gc();
f0 <= v6;
gc();
