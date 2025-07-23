class C0 {
}
class C1 extends C0 {
}
for (let v2 = 0; v2 < 100; v2++) {
    new C1([C1,C1]);
}
gc();
