class C1 extends Set {
}
const v2 = new C1();
const v3 = new C1();
const v4 = v2[v3];
const t5 = Symbol.species;
t5.toString = v4;
gc();
