class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
const v3 = v2.constructor;
for (let v4 = 0; v4 < 100; v4++) {
    new v3();
}
Reflect.construct(v3, [Reflect]);
gc();
