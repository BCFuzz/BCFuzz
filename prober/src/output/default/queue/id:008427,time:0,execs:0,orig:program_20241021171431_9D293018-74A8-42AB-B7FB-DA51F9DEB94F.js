const v2 = ("2").charAt(5);
const v5 = ["YlW","YlW","YlW"];
function f6() {
    return v2;
}
Object.defineProperty(v5, "roundingIncrement", { enumerable: true, get: f6 });
const v7 = ["YlW",904623.0599490013];
try { v7.toLocaleString("YlW", v5); } catch (e) {}
gc();
