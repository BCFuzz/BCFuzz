const o12 = {
    toString(a1) {
        let v0 = this;
        for (let i4 = 0, i5 = 10; i4 < i5; v0--) {
        }
        return a1;
    },
};
class C13 {
    p(a15, a16, a17) {
        super[a15];
    }
}
const v19 = new C13();
const t14 = v19.constructor;
const v21 = new t14(v19, C13, o12);
try { v21.p(o12); } catch (e) {}
gc();
