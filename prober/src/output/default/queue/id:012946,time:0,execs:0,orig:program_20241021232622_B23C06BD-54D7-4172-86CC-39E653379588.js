function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o10 = {
        toString(a6, a7) {
            class C8 {
            }
            class C9 extends C8 {
            }
            Object.defineProperty(C8, 6, { configurable: true, value: 3.566232640442948 });
            return a3;
        },
    };
    o10.toString();
}
const v12 = new F1(3.566232640442948, F1);
const o26 = {
    n(a14, a15) {
        const v17 = new Uint8Array(a15);
        const v18 = [F1,F1];
        function f19(a20, a21) {
            return a21;
        }
        f19(v18, ...v17, Date(), ...arguments);
        return F1;
    },
};
o26.n(v12, F1, v12, F1);
gc();
