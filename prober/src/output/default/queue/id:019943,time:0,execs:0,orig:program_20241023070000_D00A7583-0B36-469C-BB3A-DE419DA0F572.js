const v1 = [127,128,2,4294967297];
v1[66] = 4294967297;
class C2 {
    constructor(a4) {
        v1.unshift(a4, ...v1);
    }
}
new C2(C2);
gc();
