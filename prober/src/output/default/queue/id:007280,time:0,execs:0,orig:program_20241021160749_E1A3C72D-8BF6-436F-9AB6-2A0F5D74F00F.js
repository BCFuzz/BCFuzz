const v0 = [1754061190,16,11,256,-62769,-256,8];
function f1() {
    return f1;
}
function f2(a3, a4, a5, a6) {
    const o7 = {
        __proto__: v0,
    };
    Object.defineProperty(v0, 10, { configurable: true, set: f1 });
    return o7;
}
const v8 = f2();
f2(f2, v8, v8, f2);
gc();
