function f0(a1, a2) {
    const o4 = {
        get f() {
            return this;
        },
    };
    return o4;
}
const v5 = f0(f0, f0);
v5.constructor.assign(f0, v5);
gc();
