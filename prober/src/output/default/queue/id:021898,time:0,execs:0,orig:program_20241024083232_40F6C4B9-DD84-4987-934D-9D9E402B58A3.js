function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
for (let i5 = 0, i6 = 10;
    (() => {
        const v7 = [1000000000.0,-3.0,4.0];
        function f8(a9) {
            return a9;
        }
        v7.constructor = f8;
        v7["forEach"](ensureArrayStorage);
        v7.splice(735947919, 2147483648, v2);
        return i5 < i6;
    })();
    i6--) {
    for (let i24 = 0, i25 = 10; i25--, i24 < i25;) {
    }
}
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
}
gc();
