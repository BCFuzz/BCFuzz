function f0() {
    return f0;
}
const o4 = {
    "b": f0,
    "c": f0,
    p() {
        const v2 = delete this.c;
        delete this.b;
        super.a <<= v2;
        return this;
    },
};
o4.p(f0);
for (let i8 = 10, i9 = 10; -13369 < i9; i9--) {
}
gc();
