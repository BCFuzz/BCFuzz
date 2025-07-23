const o0 = {
};
function f1() {
    return f1;
}
function f2(a3) {
    for (let v4 = 0; v4 < 250; v4++) {
        v4++;
        for (let v6 = 0; v6 < 10; v6++) {
        }
    }
}
Object.defineProperty(o0, "a", { configurable: true, get: f1, set: f2 });
o0.a = o0;
gc();
