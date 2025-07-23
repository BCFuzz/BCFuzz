class C0 {
}
function f1() {
    return f1;
}
function f2(a3) {
    return f1;
}
Object.defineProperty(C0, Symbol.split, { get: f1, set: f2 });
class C6 {
    static set e(a8) {
        C0[Symbol.split];
    }
}
for (let v11 = 0; v11 < 5; v11++) {
    C6.e = v11;
}
gc();
