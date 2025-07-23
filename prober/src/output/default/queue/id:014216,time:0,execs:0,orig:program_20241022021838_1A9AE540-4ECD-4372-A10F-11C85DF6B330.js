const v0 = [0.0,877.5842117290392,2.2250738585072014e-308,0.6336381659474745,2.220446049250313e-16];
class C3 {
}
class C4 extends C3 {
}
const v5 = new C4();
v5[Symbol.toPrimitive] = Symbol;
const v7 = [v0,C4,v5];
WeakSet.constructor = Date;
const t9 = WeakSet.constructor;
const v10 = new t9();
try { v10.setYear(v7); } catch (e) {}
gc();
