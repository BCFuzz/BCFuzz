function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
v3[Symbol.toPrimitive] = Symbol;
const o9 = {
    p(a7) {
        undefined ^ a7;
        return undefined;
    },
};
try { o9.p(v3); } catch (e) {}
gc();
