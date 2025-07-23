class C1 {
}
const v2 = new C1();
v2.__lookupGetter__("__proto__");
gc();
