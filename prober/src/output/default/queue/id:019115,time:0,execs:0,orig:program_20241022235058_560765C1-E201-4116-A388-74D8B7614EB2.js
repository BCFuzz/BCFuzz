const v0 = /a\nW/vgi;
function f1(a2, a3) {
    Object.defineProperty(v0, "unicode", { configurable: true, enumerable: true, value: a3 });
    return v0;
}
new Promise(f1);
v0.toString();
gc();
