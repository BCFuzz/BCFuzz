const o17 = {
    toString(a1, a2) {
        class C3 {
        }
        const v4 = new C3();
        const v7 = new Uint32Array(1000);
        for (const v8 in v7) {
            function f9(a10, a11, a12, a13) {
                class C15 {
                }
                return arguments;
            }
            f9(f9, C3, v4);
        }
        return a2;
    },
};
o17.toString(o17, o17);
-o17;
gc();
