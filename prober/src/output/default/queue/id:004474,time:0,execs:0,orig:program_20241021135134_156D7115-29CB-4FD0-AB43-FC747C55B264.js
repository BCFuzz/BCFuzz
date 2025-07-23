function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = F1.bind();
const v6 = new F1(v5, F1);
const v7 = [-863288384,36192,1073741824,-13,-4096,5,-14036,536870889,-65537,4294967297];
const v9 = new WeakSet();
v6.toString = v5;
class C10 extends WeakSet {
    static o(a12, a13, a14, a15) {
        v9[a15];
    }
}
try { C10.o(v7, v6, "2", v6); } catch (e) {}
gc();
