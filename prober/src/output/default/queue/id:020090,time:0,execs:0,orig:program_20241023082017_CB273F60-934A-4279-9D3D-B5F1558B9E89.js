function f0() {
}
class C1 extends f0 {
}
const v2 = new C1();
const v4 = new Int8Array(v2, f0, Int8Array);
const o17 = {
    indexOf(a6, a7) {
        function F8(a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            try { new a10(v2, v2); } catch (e) {}
            for (let i = 0; i < 5; i++) {
                a11[25] &= 102;
                for (let v15 = 0; v15 < 250; v15++) {
                }
            }
        }
        new F8(F8, a6);
        return f0;
    },
};
o17.indexOf(v4);
gc();
