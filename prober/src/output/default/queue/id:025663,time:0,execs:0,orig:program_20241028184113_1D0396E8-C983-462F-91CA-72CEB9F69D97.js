for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i14 = 0, i15 = 10; i14 !== i15; i15--) {
}
const v23 = new Int8Array(255);
for (const v24 in v23) {
    class C25 {
        constructor(a27) {
            const v29 = `
                1.0 + Int8Array;
                Int8Array >>> 1000;
                /\u{12345}/myvis;
            `;
            const v36 = v29.split(a27);
            try { v36.flatMap(eval); } catch (e) {}
        }
    }
    new C25(v24);
}
gc();
