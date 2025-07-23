function f1() {
    return f1;
}
Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f1 });
for (let i6 = 0, i7 = 10; i7--, i6 != i7; i6--, i7--) {
}
class C17 {
    16 = 1073741823;
}
const v18 = new C17();
const v19 = new C17();
this.constructor.assign(v18, v19);
gc();
