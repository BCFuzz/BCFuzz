const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                let v10 = 2285;
                for (let i13 = 5, i14 = 10; i13 < v10;) {
                    v10--;
                    i13 /= -1049477845;
                }
                /\u{12345}/myvis;
            `;
            const v22 = v9.split(a7);
            v22.reverse(eval, a7, this);
            try { v22.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
