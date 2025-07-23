const v1 = /a\nW/vgi;
function f2(a3, a4) {
    Object.defineProperty(v1, "unicode", { configurable: true, enumerable: true, value: -2147483649 });
    return a4;
}
const v6 = new Promise(f2);
v1.toString(v6);
gc();
