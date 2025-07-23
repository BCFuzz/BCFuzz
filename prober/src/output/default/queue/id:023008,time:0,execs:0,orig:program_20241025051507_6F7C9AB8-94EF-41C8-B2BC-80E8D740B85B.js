class C0 {
}
const v1 = new C0();
const v3 = new Float64Array();
const o4 = {
};
const v6 = new Proxy(v1, o4);
const v9 = v3["subarray"]().sort();
try { v9.toSorted(v6); } catch (e) {}
gc();
