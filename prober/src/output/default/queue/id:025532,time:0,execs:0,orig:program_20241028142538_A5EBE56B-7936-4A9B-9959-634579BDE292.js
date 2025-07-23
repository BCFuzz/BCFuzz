const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                0 < 10;
                const v13 = [7,2,2147483649,1127304451];
                const v16 = new ArrayBuffer(15);
                C4().setFloat16(v16, v13, -1637549205);
                /\u{12345}/myvis;
                for (let i = 0; i < 5; i++) {
                    function f20(a21) {
                    }
                }
            `;
            const v22 = v8.split(a6);
            try { v22.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
