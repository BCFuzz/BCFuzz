function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    return f3;
}
class C4 extends f3 {
    constructor(a6, a7) {
        super();
        const v9 = createGlobalObject();
        Object.defineProperty(v9, v2, { value: v9 });
    }
}
new C4();
gc();
