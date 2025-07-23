const v1 = new WeakSet();
class C2 extends WeakSet {
    valueOf(a4, a5, a6) {
        v1[a5] = a4;
    }
    toString(a8, a9, a10, a11) {
        ~this;
    }
}
const v13 = new C2();
this.constructor.freeze(v1);
function f18(a19, a20, a21, a22) {
    const v23 = (273721889n).toString();
    v23.replaceAll(a22, v13);
    return v23;
}
try { f18(); } catch (e) {}
gc();
