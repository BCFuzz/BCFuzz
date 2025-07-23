class C0 {
}
const v1 = new C0();
const v2 = new C0();
function f3(a4) {
    return a4;
}
Object.defineProperty(v2, "toString", { value: f3 });
this.constructor.assign(v1, v2);
gc();
