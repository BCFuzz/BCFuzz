const v1 = new BigInt64Array();
v1.buffer.transfer();
class C4 {
}
const v6 = C4.constructor.toString(BigInt64Array);
try { v6.endsWith(v1); } catch (e) {}
gc();
