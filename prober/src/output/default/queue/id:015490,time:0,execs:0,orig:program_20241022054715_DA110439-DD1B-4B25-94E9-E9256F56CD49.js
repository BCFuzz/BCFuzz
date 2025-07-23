function f1() {
    return 22255;
}
Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f1 });
function f4(a5) {
    const o6 = {
    };
    return o6;
}
class C9 extends f4().constructor {
}
C9.keys(f4);
gc();
