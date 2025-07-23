const v1 = Date();
class C3 {
    static 175 = "split";
}
const v4 = new C3();
Object.defineProperty(v4.constructor, 175, { enumerable: true, value: v1 });
class C6 extends C3 {
}
C6[175] = C6;
C6[175] = C6;
gc();
