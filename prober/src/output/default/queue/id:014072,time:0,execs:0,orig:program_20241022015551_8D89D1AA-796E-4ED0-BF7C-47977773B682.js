function f0() {
    const o24 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                const v3 = [this];
                function f4() {
                    function f5(a6, a7) {
                        return f4;
                    }
                    return f5;
                }
                function f8(a9) {
                    return a9;
                }
                Object.defineProperty(v3, "toString", { get: f4, set: f8 });
                const v10 = [-14,2147483649,-65536,2131113613,65535,14,536870912,97932412,268435441,15238];
                function f11(a12, a13) {
                    return a12;
                }
                v10.toString = f11;
                const v14 = [-8,-603008847,-4294967297,-256,6,-4294967296,-36856,34718,338837676];
                function f15(a16, a17) {
                    a16.toString();
                    const o19 = {
                        __proto__: v14,
                    };
                    return o19;
                }
                f15(v3);
                f15(f15(v10)).flatMap(f15);
            }
        },
    };
    o24.d = o24;
    const o25 = {
    };
    return o25;
}
f0();
f0();
f0();
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    const v33 = [1073741824,-26526];
    const o34 = {
    };
    const v36 = new Proxy(v33, o34);
    v36.with().every(f0);
}
new F29();
gc();
