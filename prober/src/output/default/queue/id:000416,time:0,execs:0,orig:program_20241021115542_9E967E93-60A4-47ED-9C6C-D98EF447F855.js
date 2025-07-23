const v2 = new Set();
const v3 = v2.union(v2);
let v4;
try { v4 = v3.entries(v2, Set, v3, -1.1747348976201513e+308); } catch (e) {}
class C5 {
    static {
        try { this(-1.1747348976201513e+308, this, v4); } catch (e) {}
    }
}
gc();
