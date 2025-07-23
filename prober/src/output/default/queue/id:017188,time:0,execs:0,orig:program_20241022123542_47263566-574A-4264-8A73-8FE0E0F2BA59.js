const v0 = [46318,-7425,-9007199254740991,536870889,1515904412,127,16,15,128,-9223372036854775808];
const v2 = new Uint8ClampedArray(v0);
function f4() {
    v2["copyWithin"](0, ...v0);
    return Uint8ClampedArray;
}
function f8(a9) {
    return f4;
}
Object.defineProperty(SharedArrayBuffer, "toString", { enumerable: true, get: f4, set: f8 });
const o10 = {
};
try { o10.propertyIsEnumerable(SharedArrayBuffer); } catch (e) {}
gc();
