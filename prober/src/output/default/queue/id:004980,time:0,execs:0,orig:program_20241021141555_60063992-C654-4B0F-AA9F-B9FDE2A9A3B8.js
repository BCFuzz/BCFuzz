const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
class C4 {
}
const v5 = new C4();
class C6 {
}
const v7 = new C6();
function f8() {
    return v7;
}
class C9 {
    constructor(a11, a12) {
        for (let v13 = 0; v13 < 25; v13++) {
        }
    }
    #d;
    #e = f8;
    [v5] = v3;
    d;
    f = v7;
    #c;
    [v0];
    #g;
}
new C9(v0, C9);
const v15 = new C9();
const v16 = new C9(v5, v15);
new C9(v0, v16);
gc();
