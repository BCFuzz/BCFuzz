const v1 = Date(Date);
class C2 {
}
const v3 = new C2();
Object.defineProperty(v3.constructor, 175, { enumerable: true, value: v1 });
class C5 extends C2 {
}
C5[175] = C5;
C5[127] = C5;
gc();
