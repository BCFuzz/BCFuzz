function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F5(v4);
const v9 = new F5(v2);
const v10 = new F5(v4);
class C11 extends F5 {
    static b = v9;
    constructor(a13, a14) {
        v3(a14, a13, v10);
        v8 !== a14;
    }
}
class C17 {
    constructor() {
        super.d = this;
    }
}
const v19 = new C17();
const v20 = new C17();
for (let i24 = 0, i25 = 10 + 10; i25--, i24 < i25;) {
    for (let v32 = 0; v32 < 25; v32++) {
    }
    for (const v33 in v20) {
        v19[v33];
    }
}
for (let i37 = 10, i38 = 10; -13369 < i38; i38--) {
}
gc();
