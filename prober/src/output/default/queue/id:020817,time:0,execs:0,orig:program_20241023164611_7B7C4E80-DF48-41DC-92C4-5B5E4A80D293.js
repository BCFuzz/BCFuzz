const o4 = {
    valueOf(a1, a2) {
        super[a1[268435441]] = this;
        return a2;
    },
};
function f5() {
    const v7 = new Uint8Array();
    class C8 extends Uint8Array {
    }
    return C8 + v7;
}
f5();
edenGC.call();
Uint8Array.toString = edenGC;
gc();
