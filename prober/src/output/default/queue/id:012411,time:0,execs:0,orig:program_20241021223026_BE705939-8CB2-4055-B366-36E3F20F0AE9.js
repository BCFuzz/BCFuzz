function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 10; v4++) {
        const v6 = new Set("copyWithin");
        v6.union(v6);
    }
}
class C8 extends F0 {
}
const v9 = new C8();
const t10 = v9.constructor;
new t10();
gc();
