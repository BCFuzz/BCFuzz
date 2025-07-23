const v0 = /z(?<a>(?<b>(?<c>(?<d>.).).).)/mdygs;
function f1() {
    return v0;
}
class C2 {
}
const v3 = new C2();
v3.toString = f1;
const v6 = ["YlW","YlW","YlW"];
Object.defineProperty(v6, "minimumIntegerDigits", { configurable: true, enumerable: true, value: v3 });
const v7 = ["YlW",904623.0599490013];
try { v7.toLocaleString("YlW", v6); } catch (e) {}
gc();
