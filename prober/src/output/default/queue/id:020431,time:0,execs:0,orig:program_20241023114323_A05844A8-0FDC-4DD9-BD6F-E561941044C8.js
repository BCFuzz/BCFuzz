const v2 = new Int16Array(8, 8);
const v4 = new BigUint64Array(8, 8, 8);
function f5() {
    return v4;
}
Object.defineProperty(v4, "toString", { writable: true, enumerable: true, value: f5 });
const v7 = new Set();
const v8 = [v7,v4];
class C9 {
}
function f10(a11, a12) {
    return v2.copyWithin(8, a12, a11);
}
C9.constructor = f10;
const v14 = C9.constructor;
try { v14(v8); } catch (e) {}
gc();
