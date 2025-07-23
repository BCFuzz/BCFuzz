const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                [1.1714312061261184e+308,0.2530018102774395];
                Math.floor(22843);
            `;
            const v14 = v8.split(a6);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
