const v1 = Date();
const v2 = [v1,v1,Date];
const v3 = [v2,v1,v2];
class C4 extends Date {
}
new C4(v3);
gc();
