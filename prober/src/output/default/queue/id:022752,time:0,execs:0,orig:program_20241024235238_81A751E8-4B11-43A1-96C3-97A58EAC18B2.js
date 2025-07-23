const o13 = {
    toString(a1) {
        let v0 = this;
        for (let i4 = 0, i5 = 10; i4 < i5; v0--) {
            a1--;
        }
        return v0;
    },
};
class C14 {
    p(a16, a17, a18) {
        a16.toString();
    }
}
const v20 = new C14();
const v21 = v20.constructor;
const v22 = new v21(v21, o13, v21, o13);
try { v22.p(o13); } catch (e) {}
gc();
