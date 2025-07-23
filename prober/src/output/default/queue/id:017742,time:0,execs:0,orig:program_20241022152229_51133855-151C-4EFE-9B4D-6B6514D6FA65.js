function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const o10 = {
        toString(a6, a7) {
            class C8 {
            }
            class C9 extends C8 {
            }
            Object.defineProperty(C8, 6, { configurable: true, value: 2.220446049250313e-16 });
            return this;
        },
    };
    o10.toString();
}
new F0(F0, F0);
const o19 = {
    ["symbol"](a15) {
        const v17 = new Uint32Array();
        [...v17];
    },
};
o19.symbol();
gc();
