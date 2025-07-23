const v1 = new Int32Array();
const v2 = [127,128,2,4294967297];
v2[72] = v1;
class C3 {
    constructor(a5) {
        v2.unshift(a5, ...v2);
    }
}
new C3();
new C3(Int32Array);
new C3();
class C10 extends C3 {
}
new C10();
gc();
