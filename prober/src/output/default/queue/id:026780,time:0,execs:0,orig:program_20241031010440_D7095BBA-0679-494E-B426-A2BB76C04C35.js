const v0 = [];
const v3 = new Int8Array(255);
for (let v4 in v3) {
    class C5 {
        constructor(a7) {
            let v9 = `
                ({"length":v4,...v9} = v0);
                /\u{12345}/myvis;
            `;
            const v11 = v9.split(a7);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
