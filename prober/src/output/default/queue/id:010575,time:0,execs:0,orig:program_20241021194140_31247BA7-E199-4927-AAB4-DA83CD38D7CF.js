function f0(a1) {
    const o6 = {
        get c() {
            f0.bind(a1, f0, a1, this).bind().length;
            return a1;
        },
    };
    return o6;
}
const v7 = f0();
const o8 = {
    ...v7,
};
for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
}
gc();
