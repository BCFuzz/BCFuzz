const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                let v11;
                try { v11 = a7(C5, 255, a7, 10, this); } catch (e) {}
                C5(v9, "trim", 10, v11);
                /\u{12345}/myvis;
            `;
            const v14 = v9.split(a7);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
