function f0(a1) {
    const o17 = {
        valueOf(a3) {
            const v5 = new Uint8Array(a3, a1, a1);
            v5.set(this, v5);
            for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
            }
            return a3;
        },
    };
    return o17;
}
class C18 extends f0 {
}
const v19 = new C18();
v19.valueOf(C18, C18, C18, C18);
gc();
