const v1 = new Uint8Array(Uint8Array);
const v3 = v1.buffer.transfer();
class C4 {
}
const v6 = C4.constructor.toString(v3, C4);
try { v6.endsWith(v1); } catch (e) {}
gc();
