class C0 {
    static n(a2, a3, a4, a5) {
        const v7 = new SharedArrayBuffer();
        let v8 = 60240;
        const v11 = new Uint32Array(1000);
        for (const v12 in v11) {
            function f13(a14, a15, a16, a17) {
                const o26 = {
                    set b(a20) {
                        try { v7(); } catch (e) {}
                        v8++;
                        function F23() {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        for (let v25 = 0; v25 < 5; v25++) {
                        }
                    },
                };
                o26.b = o26;
                return arguments;
            }
            f13();
        }
    }
}
C0.n();
gc();
