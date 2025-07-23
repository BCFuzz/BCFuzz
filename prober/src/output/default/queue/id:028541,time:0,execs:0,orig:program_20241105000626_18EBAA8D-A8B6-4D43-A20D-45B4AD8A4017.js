const v1 = new BigInt64Array();
const v2 = v1.constructor;
class C3 extends v2 {
}
const v4 = new C3();
const v5 = v4.buffer;
v5.transfer(v5, C3, v2, v4, v5);
function f7(a8, a9, a10, a11) {
    Object.defineProperty(a8, 10, { configurable: true, set: a10 });
    return v2;
}
try { f7(v4); } catch (e) {}
gc();
