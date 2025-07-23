class C1 {
    5 = 0.7367013133542424;
}
const v2 = new C1();
function f3() {
    return C1;
}
Object.defineProperty(v2, 1, { set: f3 });
gc();
