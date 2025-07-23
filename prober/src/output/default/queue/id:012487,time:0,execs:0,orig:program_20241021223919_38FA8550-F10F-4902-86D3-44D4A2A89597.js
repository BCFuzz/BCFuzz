for (let v0 = 0; v0 < 10; v0++) {
    for (let v2 = 0; v2 < 10; v2++) {
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = a7.toString;
            try { v9(); } catch (e) {}
            function f11(a12) {
                const o16 = {
                    toString(a14, a15) {
                        return f11;
                    },
                };
            }
            f11();
        }
        const v18 = new F4(196.25100004624983, F4);
        const t16 = v18.constructor;
        new t16(6, 6);
    }
}
gc();
