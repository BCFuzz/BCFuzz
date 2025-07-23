class C0 {
}
new C0();
class C2 extends C0 {
}
for (let v3 = 0; v3 < 100; v3++) {
    new C2([C0,C0,C0]);
}
gc();
