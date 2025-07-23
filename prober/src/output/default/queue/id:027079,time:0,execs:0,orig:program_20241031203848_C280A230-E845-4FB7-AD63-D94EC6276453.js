const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                class C11 extends ([v8,v8,v8]).constructor {
                    static #valueOf(a13, a14, a15) {
                        Float64Array();
                        while (0 < 3) {
                            super.a = a13;
                        }
                    }
                }
            `;
            const v21 = v8.split(a6);
            v21.shift();
            try { v21.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
