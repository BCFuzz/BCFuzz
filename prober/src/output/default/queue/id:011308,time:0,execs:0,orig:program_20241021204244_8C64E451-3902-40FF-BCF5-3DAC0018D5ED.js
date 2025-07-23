class C1 {
}
const v2 = new C1();
const v3 = v2.constructor;
const v4 = new v3(v2, v2, v2, v3);
v4[Symbol.toPrimitive] = Symbol;
const v8 = [C1,C1,C1,C1,C1];
v8.numberingSystem = v4;
const v9 = ["YlW",904623.0599490013];
try { v9.toLocaleString("YlW", v8); } catch (e) {}
gc();
