function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
for (let i5 = 0, i6 = 10;
    (() => {
        const v7 = [1000000000.0,-3.0,4.0];
        for (let v9 = 0; v9 < 5; v9++) {
            v7["p" + v9] = v9;
        }
        v7["forEach"](ensureArrayStorage);
        v7.splice(735947919, 2147483648, v2);
        return i5 < i6;
    })();
    i6--) {
    for (let i25 = 0, i26 = 10; i26--, i25 < i26;) {
    }
}
for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
}
gc();
