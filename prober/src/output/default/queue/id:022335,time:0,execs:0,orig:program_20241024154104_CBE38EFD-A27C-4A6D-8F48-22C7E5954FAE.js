function f0() {
}
class C1 extends f0 {
    toString(a3) {
        for (let v4 = 0; v4 < 160; v4++) {
            this[("p").bold() + v4] = v4;
        }
    }
}
const v8 = new C1();
"a" << v8;
gc();
