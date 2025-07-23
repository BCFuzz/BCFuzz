function f0(a1, a2) {
    const o4 = {
        get c() {
            return this;
        },
        ...a1,
    };
    return o4;
}
const v5 = f0(f0, f0);
v5.b = v5;
f0(f0(v5));
gc();
