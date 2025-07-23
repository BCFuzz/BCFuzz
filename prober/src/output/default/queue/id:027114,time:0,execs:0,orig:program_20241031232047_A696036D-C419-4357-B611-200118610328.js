const o1 = {
    "a": -12,
};
for (const v2 in o1) {
    class C3 {
        constructor(a5) {
            const v7 = `
                function f8() {
                    function f9(a10, a11, a12) {
                        return a11;
                    }
                    /\u{12345}/myvis;
                    return C3;
                }
            `;
            const v14 = v7.split(a5);
            for (let i17 = 0, i18 = 10; i18-- < i18;) {
            }
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C3(v2);
}
gc();
