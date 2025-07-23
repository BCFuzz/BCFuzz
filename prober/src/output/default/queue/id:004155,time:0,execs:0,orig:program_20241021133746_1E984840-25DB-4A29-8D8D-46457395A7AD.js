const v0 = /()a*b/vis;
const v2 = ("1073741825")[5];
try { v2.includes(v0); } catch (e) {}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8() {
        if (!new.target) { throw 'must be called with new'; }
        this.a = -8456;
    }
    const v11 = new F8();
    const v12 = new F8();
    const v13 = new F8();
    class C16 {
        constructor(a18, a19, a20, a21) {
            a19[this] ||= v13 - a21;
        }
    }
    new C16("valueOf", v12);
    new C16("function", v11);
}
new F4();
new F4();
gc();
