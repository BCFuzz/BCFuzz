function f0(a1, a2) {
    const o4 = {
        get g() {
            return f0;
        },
    };
    return o4;
}
const v5 = f0();
f0().constructor.entries(v5);
gc();
