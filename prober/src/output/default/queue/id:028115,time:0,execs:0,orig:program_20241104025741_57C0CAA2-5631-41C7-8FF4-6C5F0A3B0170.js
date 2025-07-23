class C0 {
}
const v1 = new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v1;
}
const v6 = new F2();
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
for (let i19 = 0, i20 = 10; i19 !== i20; i20--) {
}
for (const v27 in v6) {
    class C28 {
        constructor(a30) {
            const v32 = `
                switch (C28) {
                    default:
                        function F33(a35, a36, a37, a38) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        break;
                }
                /\u{12345}/myvis;
            `;
            const v40 = v32.split(a30);
            try { v40.flatMap(eval); } catch (e) {}
        }
    }
    new C28(v27);
}
gc();
