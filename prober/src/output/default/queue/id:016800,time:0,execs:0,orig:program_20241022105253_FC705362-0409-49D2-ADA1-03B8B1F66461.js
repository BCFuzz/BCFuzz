const v2 = ["YlW"];
function f3() {
    return f3();
}
function f5(a6) {
    return f3;
}
Object.defineProperty(v2, "maximumSignificantDigits", { configurable: true, enumerable: true, get: f3, set: f5 });
const v7 = ["YlW",904623.0599490013];
try { v7.toLocaleString("YlW", v2); } catch (e) {}
gc();
