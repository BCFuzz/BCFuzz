const v0 = [-1000000000.0,956.2822869208562,1.0];
class C2 {
}
const v3 = new C2();
function f4(a5) {
    const v7 = new Int16Array(v0);
    return v7.toSorted(f4);
}
v3.toString = f4;
try { new Date(-1024, -1024, Date, v3); } catch (e) {}
gc();
