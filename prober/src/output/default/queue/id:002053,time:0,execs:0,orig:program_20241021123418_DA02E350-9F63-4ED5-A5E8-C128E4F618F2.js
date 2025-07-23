function f0(a1) {
    return a1;
}
class C2 {
}
const v3 = new C2();
for (let v4 = 0; v4 < 5; v4++) {
    Object.defineProperty(v3, 153, { configurable: true, enumerable: true, get: f0 });
}
gc();
