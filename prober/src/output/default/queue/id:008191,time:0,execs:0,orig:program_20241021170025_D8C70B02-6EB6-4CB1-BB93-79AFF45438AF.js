const v0 = /(?:foo)/mdyiu;
function f2() {
    function f3(a4) {
        return -9007199254740990;
    }
    return f3;
}
Object.defineProperty(BigUint64Array, "valueOf", { configurable: true, enumerable: true, get: f2 });
const v7 = new Int8Array();
v7.copyWithin(v0, BigUint64Array);
const v9 = new BigUint64Array();
Object.defineProperty(v9, "toString", { writable: true, enumerable: true, value: f2 });
try { v9.subarray(v9); } catch (e) {}
gc();
