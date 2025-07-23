function f0() {
    const v4 = new Date(("63843").normalize());
    return v4.toJSON();
}
const o13 = {
    set d(a7) {
        const v8 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
        v8[Symbol.toPrimitive] = f0;
        const o11 = {
            __proto__: v8,
        };
        o11.slice(v8);
    },
};
o13.d = o13;
gc();
