function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
function f13() {
    function F14() {
        if (!new.target) { throw 'must be called with new'; }
        const v17 = new Int16Array();
        const o18 = {
        };
        o18.getPrototypeOf = o18;
        const v20 = new Proxy(v17, o18);
        const o26 = {
            toString(a23, a24) {
                a23 instanceof Uint8ClampedArray;
                return F14;
            },
            __proto__: v20,
        };
        o26.toString(o26);
    }
    new F14();
    return f13;
}
F0.toString = f13;
try { F0.toLocaleString(); } catch (e) {}
gc();
