const v2 = new BigInt64Array();
class C3 {
}
class C4 extends C3 {
}
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a10.d = a10;
    const t8 = createGlobalObject().Float16Array;
    const v14 = new t8(BigUint64Array);
    v14.constructor = a10;
    v14.slice();
}
const v16 = new F5(C3, C3, C4, F5);
const v18 = v16.constructor.d;
try { new v18(v2, BigInt64Array, BigUint64Array, BigUint64Array); } catch (e) {}
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
