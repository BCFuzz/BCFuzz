function f0() {
    return f0;
}
class C2 {
}
const v3 = new C2();
const v4 = new C2();
for (let v5 = 0; v5 < 5; v5++) {
    Object.defineProperty(v4, 1155538786, { configurable: true, enumerable: true, set: f0 });
    v4.__proto__ = v3;
}
gc();
