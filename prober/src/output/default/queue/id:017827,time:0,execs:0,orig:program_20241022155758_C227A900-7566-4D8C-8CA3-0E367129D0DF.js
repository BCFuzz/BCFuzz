const v3 = new Uint16Array(undefined, undefined);
class C4 extends Float32Array {
}
const v5 = new C4();
const v6 = v3 % v5;
try { v5.set(undefined, v6); } catch (e) {}
gc();
