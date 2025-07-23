class C0 {
    constructor(a2, a3) {
        try {
            super.p();
        } catch(e5) {
        }
    }
}
const v6 = new C0(C0, C0);
const v7 = new C0(v6, C0);
const t10 = v7.constructor;
new t10();
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    gc();
}
new F10();
for (let v15 = 0; v15 < 5; v15++) {
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        try { this.constructor(a19, a19); } catch (e) {}
    }
    new F16();
    function F22() {
        if (!new.target) { throw 'must be called with new'; }
        this.propertyIsEnumerable;
        this.f = -9007199254740992;
        this.b = -9007199254740992;
    }
    new F22();
}
gc();
