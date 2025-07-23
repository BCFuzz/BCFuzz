function f0() {
}
class C1 extends f0 {
    toString(a3) {
        for (let i = 0; i < 5; i++) {
            for (let v4 = 0; v4 < 32; v4++) {
                this["p" + v4] = v4;
            }
        }
    }
}
const v7 = new C1();
const v8 = new C1();
"a" << v8;
const o12 = {
    [v7]: -2147483647,
};
gc();
