const v1 = new BigUint64Array();
const v3 = new BigUint64Array(9);
function f4() {
    return v1;
}
f4[Symbol.species] = f4;
v3.constructor = f4;
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
try { v3.slice(); } catch (e) {}
gc();
