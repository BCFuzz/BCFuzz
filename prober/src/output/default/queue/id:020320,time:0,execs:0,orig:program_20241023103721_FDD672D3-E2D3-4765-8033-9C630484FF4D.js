let v0 = Date;
function f1() {
    return v0;
}
class C2 extends f1 {
    constructor(a4, a5) {
        super();
        ++v0;
    }
}
new C2(v0, v0);
const v10 = [v0,v0,v0];
function f11() {
    function f12() {
        return v0;
    }
    v0.toString(f12);
    return v0;
}
Object.defineProperty(v10, "roundingIncrement", { enumerable: true, get: f11 });
const v14 = ["YlW",904623.0599490013];
try { v14.toLocaleString("YlW", v10); } catch (e) {}
gc();
