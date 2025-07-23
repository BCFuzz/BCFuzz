const v0 = [-15,65537,-4109,27282,22279,1,-2147483648,38965,-171487530];
class C1 {
}
const v2 = new C1();
function f3(a4) {
    return v0;
}
Object.defineProperty(v2, "toString", { configurable: true, value: f3 });
const v5 = v2.constructor;
const v6 = new v5(C1, v5, f3, v0);
const v8 = Uint32Array.from(v2);
try { v8.with(v6, v2); } catch (e) {}
gc();
