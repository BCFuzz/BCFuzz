class C0 {
    constructor(a2) {
        arguments.length = 10;
        const v5 = arguments.__proto__;
        try { v5(...arguments); } catch (e) {}
    }
}
new C0();
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
for (let i20 = 0, i21 = 10;
    i20 < i21;
    (() => {
        for (let i27 = 10, i28 = 10; -13369 < i28; i28--) {
        }
        i21--;
    })()) {
}
for (let i40 = 0, i41 = 10; i41--, i40 < i41;) {
}
for (let i50 = -3, i51 = 10; i50 < i51; i51--) {
}
gc();
