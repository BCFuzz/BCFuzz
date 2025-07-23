for (let i = 0; i < 5; i++) {
    const o9 = {
        toString(a1, a2) {
            function f3() {
                return f3;
            }
            const t6 = f3.bind().constructor;
            t6();
            class C7 extends f3 {
            }
            try { C7(); } catch (e) {}
            return a1;
        },
    };
    o9.toString(o9, o9);
    o9.toString(o9).toString();
}
gc();
