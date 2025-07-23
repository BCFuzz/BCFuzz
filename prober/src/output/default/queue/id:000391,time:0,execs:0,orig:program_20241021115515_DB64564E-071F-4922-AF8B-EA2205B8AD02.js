class C0 {
}
function f1() {
    return f1;
}
const v2 = [f1];
function f3() {
    return C0;
}
Object.defineProperty(v2, 1283, { get: f3 });
class C4 extends C0 {
    constructor(a6, a7, a8) {
        super();
        v2[1283];
    }
}
new C4(f3, C4, C0);
gc();
