class C1 {
    constructor(a3) {
        this[a3];
    }
}
new C1(Array);
class C8 {
}
const v9 = new C8();
const v12 = Symbol.for().description;
class C13 extends WeakMap {
    o(a15, a16, a17) {
        v9[a15] <<= 1000.0;
    }
}
const v18 = new C13();
v18.o(v12);
gc();
