function f0() {
}
class C1 extends f0 {
    valueOf() {
        undefined.name = undefined;
    }
}
const v4 = new C1();
const v6 = new SharedArrayBuffer();
const v8 = new DataView(v6);
try { v8.getBigUint64(v4); } catch (e) {}
gc();
