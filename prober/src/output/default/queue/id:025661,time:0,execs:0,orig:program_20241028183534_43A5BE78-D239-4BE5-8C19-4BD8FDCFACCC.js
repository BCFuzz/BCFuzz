const v0 = [1889176048,-1141653677,-9007199254740991,10000,-268435456,-8,-56666,1662926474];
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                function f10() {
                    class C11 {
                        [v0] = v9;
                    }
                    /\u{12345}/myvis;
                }
            `;
            const v13 = v9.split(a7);
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
