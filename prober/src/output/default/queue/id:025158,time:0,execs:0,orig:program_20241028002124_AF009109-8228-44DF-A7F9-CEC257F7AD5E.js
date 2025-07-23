const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    function F11(a13, a14) {
                        if (!new.target) { throw 'must be called with new'; }
                        const v15 = a14++;
                        v15 + v15;
                    }
                    new F11(721547599);
                    return f9;
                }
            `;
            const v18 = v8.split(a6);
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
