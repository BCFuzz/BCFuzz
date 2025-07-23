const v0 = [3.0];
function f1() {
    return f1;
}
v0[Symbol.matchAll] = f1;
const v4 = [v0,v0];
const v5 = [f1,f1,f1,f1];
class C6 {
    constructor(a8, a9) {
        a8[Symbol.matchAll];
    }
}
new C6(v4);
new C6(v5);
new C6(v0);
gc();
