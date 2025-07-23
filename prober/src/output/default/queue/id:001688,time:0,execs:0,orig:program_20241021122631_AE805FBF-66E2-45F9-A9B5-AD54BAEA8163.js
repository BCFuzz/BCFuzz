class C0 {
}
new C0();
C0.prototype = C0;
new C0();
gc();
