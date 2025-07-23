class C1 {
}
const v2 = new C1();
const v3 = v2.constructor;
v3[Symbol.toPrimitive] = Date;
const v7 = createGlobalObject();
try { v7.load(v3); } catch (e) {}
gc();
