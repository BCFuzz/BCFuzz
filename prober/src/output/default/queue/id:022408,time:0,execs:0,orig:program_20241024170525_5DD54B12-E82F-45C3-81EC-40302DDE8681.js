class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
class C3 {
    c;
    4 = v1;
    constructor() {
        this[Symbol.toStringTag] = v2;
        const t9 = [C3];
        t9.toString = gc;
    }
}
const v9 = new C3();
function f10() {
    this.b = this;
    delete this.b;
    return v2;
}
const v15 = new Float64Array(1201);
v15.map(f10, v9);
gc();
