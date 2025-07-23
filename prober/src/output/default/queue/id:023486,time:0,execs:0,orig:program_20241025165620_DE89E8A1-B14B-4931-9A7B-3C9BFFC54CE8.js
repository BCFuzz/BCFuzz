for (let v1 = 0; v1 < 5; v1++) {
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
        const v12 = [-7677,1613127934,16,47879,12,10000,-56627,-4096,21519];
        function f13() {
            function f14() {
                function f16(a17, a18) {
                    const v19 = a18 === a18;
                    const o26 = {
                        [a18](a21, a22, a23, a24) {
                            a18();
                        },
                    };
                    return v19;
                }
                const v27 = f16();
                for (let i = 0; i < 5; i++) {
                    f16("m", v27);
                }
                class C29 extends 1651233039n {
                }
                return "m";
            }
            return f14;
        }
        function f30(a31) {
            return i4;
        }
        Object.defineProperty(v12, "toString", { configurable: true, enumerable: true, get: f13, set: f30 });
        const v33 = new SharedArrayBuffer(v1);
        const v35 = new DataView(v33);
        try { v35.getUint16(v12); } catch (e) {}
    }
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
gc();
