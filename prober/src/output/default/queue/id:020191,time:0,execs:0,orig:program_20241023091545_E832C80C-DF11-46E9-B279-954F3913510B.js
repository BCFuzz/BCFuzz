const v2 = new Int32Array(209);
function f3() {
    return f3;
}
function f6(a7) {
    function f8() {
        return f8;
    }
    Object.defineProperty(v2, 8, { enumerable: true, get: f3, set: f8 });
    return f8;
}
BigInt64Array[Symbol.toPrimitive] = f6;
const v10 = new BigInt64Array();
const v13 = RegExp.bind(v10, 2.220446049250313e-16, BigInt64Array);
try { v13(v2, v2, 209, v2, v10); } catch (e) {}
gc();
