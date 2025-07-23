function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F3(F0, F3, F3);
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
for (let i22 = 0, i23 = 10; i22 !== i23; i23--) {
}
const v31 = new Int8Array(255);
for (const v32 in v31) {
    class C33 {
        constructor(a35) {
            const v37 = `
                with (v8) {
                    b = v2;
                }
                /\u{12345}/myvis;
            `;
            const v39 = v37.split(a35);
            try { v39.flatMap(eval); } catch (e) {}
        }
    }
    new C33(v32);
}
gc();
