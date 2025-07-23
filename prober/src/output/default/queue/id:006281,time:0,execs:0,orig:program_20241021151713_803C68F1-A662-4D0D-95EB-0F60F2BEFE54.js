const v2 = new BigInt64Array(257);
class C3 {
}
const v4 = new C3();
function f5() {
    let v6;
    try { v6 = v2.toSorted(C3); } catch (e) {}
    return v6;
}
Object.defineProperty(v4, "constructor", { configurable: true, value: f5 });
const t10 = v4.constructor;
t10();
gc();
