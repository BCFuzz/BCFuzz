for (let v0 = 0; v0 < 5; v0++) {
    class C5 {
        constructor(a7, a8, a9, a10) {
            for (let i = 0; i < 5; i++) {
                new Uint8Array(a10);
            }
        }
    }
    const v12 = new C5();
    new C5(-65535, -9007199254740991, v12, 4294967296);
    function f14(a15, a16, a17, a18) {
        const o42 = {
            set d(a20) {
                for (let i = 0; i < 5; i++) {
                    const v21 = [this,this,this];
                    function f22() {
                        function f23(a24, a25) {
                            return a24;
                        }
                        return f23;
                    }
                    function f26(a27) {
                        return f26;
                    }
                    Object.defineProperty(v21, "toString", { get: f22, set: f26 });
                    const v28 = [-14,2147483649,-65536,2131113613,65535,14,536870912,97932412,268435441,15238];
                    function f29(a30, a31) {
                        return C5;
                    }
                    v28.toString = f29;
                    const v32 = [-8,-603008847,-4294967297,-256,6,-4294967296,-36856,34718,338837676];
                    function f33(a34, a35) {
                        a34.toString();
                        const o37 = {
                            __proto__: v32,
                        };
                        return o37;
                    }
                    f33(v21);
                    f33(f33(v28)).flatMap(f33);
                }
            },
        };
        o42.d = o42;
        return -65535;
    }
    f14(-65535, v12, v0, -65535);
    f14(v12, -65535, -65535, v12);
}
gc();
