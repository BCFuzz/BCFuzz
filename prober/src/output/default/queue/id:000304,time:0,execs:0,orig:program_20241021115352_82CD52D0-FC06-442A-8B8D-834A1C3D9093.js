function f1(a2, a3) {
}
Int8Array[Symbol.toPrimitive] = f1;
const v8 = new Int32Array();
const v10 = new WeakSet();
function f11(a12) {
    return v8;
}
v10.toString = f11;
("valueOf").search(Int8Array);
try { ("valueOf").slice(BigUint64Array, v10); } catch (e) {}
const v16 = [17428,39892,10000,65536,7,-268435456,-62031];
try { v16.splice(v10); } catch (e) {}
gc();
