const v1 = [127,128,2,4294967297];
v1[3347] = 3;
class C2 {
    constructor(a4) {
        v1.unshift(a4, ...v1);
    }
}
new C2(C2);
const v7 = new C2(C2);
new C2(v7);
class C9 extends C2 {
}
new C9();
new C9();
gc();
