const v1 = Symbol.constructor;
function f2(a3, a4) {
    return Symbol;
}
Object.defineProperty(v1, 0, { enumerable: true, get: f2, set: f2 });
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    function f15() {
        [arguments];
        return f2;
    }
    f15();
}
gc();
