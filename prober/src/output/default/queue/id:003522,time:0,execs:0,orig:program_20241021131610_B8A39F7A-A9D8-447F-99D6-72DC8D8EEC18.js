class C0 {
    1;
}
new C0();
const v2 = C0.valueOf();
v2.prototype = v2;
for (let v3 = 0; v3 < 100; v3++) {
    new C0();
}
gc();
