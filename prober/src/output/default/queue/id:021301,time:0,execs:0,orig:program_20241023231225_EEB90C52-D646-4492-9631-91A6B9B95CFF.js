const v0 = /se(ab)\1(\p{General_Category=Decimal_Number}+)*/mdyv;
function f2() {
    function f3(a4, a5) {
        return v0;
    }
    return f3;
}
function f6(a7) {
    return v0;
}
Object.defineProperty(ArrayBuffer, "toString", { configurable: true, enumerable: true, get: f2, set: f6 });
const v8 = ArrayBuffer.toString();
for (let i12 = 0, i13 = 10 + 10; i13--, i13;) {
    const v20 = createGlobalObject();
    try { v20.load(v8); } catch (e) {}
}
gc();
