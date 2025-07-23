function f0() {
    const v1 = [-4096,-546180325,14589,268435440];
    const v3 = new Proxy(v1, v1);
    const v4 = new Proxy(v3, v3);
    v4.flat();
}
class C6 extends f0 {
}
new C6();
new C6();
for (let i11 = 0, i12 = 4096; i11 < i12; i12--) {
}
gc();
