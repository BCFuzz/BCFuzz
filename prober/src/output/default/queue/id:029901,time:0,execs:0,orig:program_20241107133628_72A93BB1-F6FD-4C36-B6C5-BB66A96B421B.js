const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}3ya(?!b)*/myvis;
                let v10 = -12n;
                v10++ + "-14248";
            `;
            const v14 = v8.split(a6);
            for (let i17 = 0, i18 = 127; i17 < i18; i18--) {
            }
            v14.reverse();
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
