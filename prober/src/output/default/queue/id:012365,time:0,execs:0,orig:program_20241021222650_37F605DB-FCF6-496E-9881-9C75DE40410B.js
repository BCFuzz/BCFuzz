function f0() {
    const v3 = new Int32Array(681);
    function f4(a5, a6, a7, a8) {
        return arguments;
    }
    v3.map(f4);
    return Int32Array;
}
class C11 extends f0 {
}
const v12 = new C11();
new C11();
new C11();
class C15 extends C11 {
    constructor(a17, a18, a19) {
        super();
        f0();
    }
}
new C15(v12, C11, f0);
new C15();
gc();
