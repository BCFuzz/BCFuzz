function f0(a1, a2, a3, a4) {
    return a4;
}
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
const o21 = {
    valueOf(a16, a17) {
        a17[Symbol.hasInstance] = f0;
        a16 instanceof a17;
        return f0;
    },
};
o21.valueOf(65536n, o21);
gc();
