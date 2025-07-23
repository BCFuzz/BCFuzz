const v0 = /a+?4a(?=a){9,10}a/gi;
const v2 = [[v0,v0,v0],v0];
const v4 = v2.toLocaleString(v2, v0).toLowerCase();
class C6 extends Date {
}
const v7 = new C6();
v7.toLocaleTimeString().matchAll(v4);
gc();
