function f0() {
    return f0;
}
const v1 = /ab|cabc|def|ghi/mgisu;
const v2 = /[a{0}]/dygisu;
class C3 {
    constructor(a5) {
        a5.test(v1.compile(f0));
    }
}
new C3(v2);
gc();
