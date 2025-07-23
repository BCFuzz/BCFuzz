function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [a4,a4,a4,a4,a4];
    function f6() {
        function f7(a8, a9) {
            return a9;
        }
        return f7;
    }
    function f10(a11) {
        return a11;
    }
    Object.defineProperty(v5, "toString", { get: f6, set: f10 });
    const v12 = [-14,2147483649,-65536,2131113613,65535,14,536870912,97932412,268435441,15238];
    function f13(a14, a15) {
        return a3;
    }
    v12.toString = f13;
    const v16 = [-8,-603008847,-4294967297,-256,6,-4294967296,-36856,34718,338837676];
    function f17(a18, a19) {
        a18.toString(a4, F0, f6);
        const o21 = {
            __proto__: v16,
        };
        return o21;
    }
    f17(v5);
    const v23 = f17(v12);
    f17(v5);
    f17(v23).flatMap(f17);
}
new F0();
new F0();
new F0();
gc();
