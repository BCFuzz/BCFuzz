for (let i3 = -3, i4 = 1; -13369 < i4; i4--) {
}
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
for (let i24 = 10, i25 = 1289; -13369 !== i25; i25--) {
}
for (let i35 = -3, i36 = 10; i36--, i35 < i36;) {
}
for (let i45 = 0, i46 = 10;
    i45 < i46;
    (() => {
        i46--;
        for (let i53 = 0, i54 = 2520; i54; i54--) {
        }
        for (let i62 = 0, i63 = 10; i62 < i63; i63--) {
        }
    })()) {
}
for (let i74 = 0, i75 = 10; i74 < i75; i75--) {
}
for (let i84 = 0, i85 = 10; i84 !== i85; i85--) {
}
class C92 {
}
C92.constructor = runString;
function F93() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v95 = 0; v95 < 5; v95++) {
        const v96 = `
            const o103 = {
                toString(a98, a99) {
                    return /\u{12345}/myvis;
                },
                set b(a102) {
                },
            };
        `;
        const v104 = v96.split(v95);
        try { C92.constructor(v104); } catch (e) {}
    }
}
new F93();
gc();
