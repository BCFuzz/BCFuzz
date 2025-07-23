const o23 = {
    set d(a1) {
        for (let i = 0; i < 5; i++) {
            const v2 = [this,this,this,this];
            function f3() {
                function f4(a5, a6) {
                    return f4;
                }
                return f4;
            }
            function f7(a8) {
                return v2;
            }
            Object.defineProperty(v2, "toString", { get: f3, set: f7 });
            const v9 = [-14,2147483649,-65536,2131113613,65535,14,536870912,97932412,268435441,15238];
            function f10(a11, a12) {
                return a11;
            }
            v9.toString = f10;
            const v13 = [-8,-603008847,-4294967297,-256,6,-4294967296,-36856,34718,338837676];
            function f14(a15, a16) {
                a15.toString();
                const o18 = {
                    __proto__: v13,
                };
                return o18;
            }
            f14(v2);
            f14(f14(v9)).flatMap(f14);
        }
    },
};
o23.d = o23;
gc();
