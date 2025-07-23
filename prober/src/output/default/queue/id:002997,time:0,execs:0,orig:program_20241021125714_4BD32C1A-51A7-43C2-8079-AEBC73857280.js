const v0 = [1754061190,16,11,256,-62769,-256,8];
function f1() {
    return v0;
}
function f2(a3, a4, a5, a6) {
    const o7 = {
        ...v0,
    };
    Object.defineProperty(v0, 10, { configurable: true, set: f1 });
    return a4;
}
f2(f2(), f2, f1, f1);
gc();
