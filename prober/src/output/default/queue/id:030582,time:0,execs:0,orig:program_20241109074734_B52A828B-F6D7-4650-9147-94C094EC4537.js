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
        for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
        }
    })()) {
}
for (let i65 = 0, i66 = 10; i65 < i66; i66--) {
}
for (let i75 = 0, i76 = 10; i75 !== i76; i76--) {
}
class C83 {
}
C83.constructor = runString;
function F84() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v86 = 0; v86 < 5; v86++) {
        const v87 = `
            [...[1073741824,-65537],...0.0];
            /\u{12345}/myvis;
        `;
        const v92 = v87.split(v86);
        try { C83.constructor(v92); } catch (e) {}
    }
}
new F84();
gc();
