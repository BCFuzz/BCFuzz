const v1 = new Int16Array();
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const v15 = new Int8Array(255);
for (const v16 in v15) {
    class C17 {
        constructor(a19) {
            const v21 = `
                let v22 = 0;
                do {
                    let v23;
                    try { v23 = v1.lastIndexOf(a19); } catch (e) {}
                    v23[v21] += 9;
                    v22++;
                } while (v22 < 3)
            `;
            const v27 = v21.split(a19);
            try { v27.flatMap(eval); } catch (e) {}
        }
    }
    new C17(v16);
}
gc();
