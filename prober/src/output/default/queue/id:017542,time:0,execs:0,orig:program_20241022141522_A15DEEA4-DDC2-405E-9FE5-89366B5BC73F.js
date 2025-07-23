function f0(a1, a2) {
}
class C3 extends f0 {
    static toString(a5, a6, a7) {
        const v8 = [-9223372036854775807,-256,220721231,4096];
        function f9(a10, a11, a12, a13) {
            for (const v16 of a10.toString().link()) {
                const o17 = {
                    [v16]: v8,
                };
            }
            return v8;
        }
        f9(f9);
    }
}
C3["toString"]();
gc();
