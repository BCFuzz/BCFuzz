function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C3 {
}
const v4 = new C3();
const v5 = new C3();
class C6 {
}
const v7 = new C6();
function f8() {
    return f8;
}
class C9 {
    constructor(a11, a12) {
        this.p11 = v4;
        for (let v13 = 0; v13 < 25; v13++) {
        }
    }
    8 = f8;
    #d;
    #e = f8;
    [v5] = v2;
    d;
    f = v7;
    #c;
}
const v14 = new C9();
new C9();
new C9(v14, f8);
new C9();
gc();
