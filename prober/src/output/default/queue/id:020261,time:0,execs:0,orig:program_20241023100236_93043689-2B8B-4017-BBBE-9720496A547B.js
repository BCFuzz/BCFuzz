class C1 extends Array {
}
class C2 extends C1 {
}
function f3(a4) {
    return Array;
}
Object.defineProperty(C2, "toString", { configurable: true, enumerable: true, value: f3 });
const o14 = {
    n(a6, a7, a8) {
        const v9 = this;
        const v11 = v9.Intl.Collator;
        v11().compare(a6);
        return v11;
    },
};
const v15 = o14.n;
try { v15(C2); } catch (e) {}
gc();
