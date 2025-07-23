function f1(a2, a3) {
    const o4 = {
        __proto__: a2,
    };
    return o4;
}
const v5 = f1();
Object.defineProperty(v5, 48666, { enumerable: true, value: f1(v5) });
class C7 {
}
const v8 = new C7();
const v9 = v8.constructor;
class C10 {
    c;
    4 = v8;
    constructor() {
        this[Symbol.toStringTag] = v9;
        const t17 = [v9,v9,v9];
        t17.toString = gc;
    }
}
const v16 = new C10();
function f17() {
    this.b = this;
    delete this.b;
    return this;
}
const v22 = new Float64Array(1201);
v22.map(f17, v16);
gc();
