function f0() {
    return f0;
}
class C1 extends f0 {
}
const t5 = C1.prototype.constructor;
const v4 = new t5();
const v5 = v4[1];
const v7 = Symbol.species;
const v8 = Symbol.for();
const v10 = v7.description.blink();
try { v10.replace(v5, v8); } catch (e) {}
gc();
