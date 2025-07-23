class C0 {
    valueOf(a2) {
        Reflect.construct();
    }
}
const v5 = new C0();
const v7 = new SharedArrayBuffer(C0);
try { new BigInt64Array(v7, v7, v5); } catch (e) {}
gc();
