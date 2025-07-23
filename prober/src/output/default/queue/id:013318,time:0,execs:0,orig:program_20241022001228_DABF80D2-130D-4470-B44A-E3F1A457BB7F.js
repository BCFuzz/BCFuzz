function f2(a3) {
    a3[2];
    return -4096n;
}
class C5 extends f2 {
    [127n] = -4096n;
}
try { new C5(); } catch (e) {}
const v9 = new Uint16Array(3578);
for (const v10 of v9) {
}
gc();
