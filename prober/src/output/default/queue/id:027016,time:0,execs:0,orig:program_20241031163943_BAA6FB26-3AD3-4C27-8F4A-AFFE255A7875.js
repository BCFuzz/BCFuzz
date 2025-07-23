class C0 {
}
const v1 = new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v1;
}
const v6 = new F2(F2, v1);
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
for (let i19 = 0, i20 = 10; i19 !== i20; i20--) {
}
for (const v28 in v6) {
    class C29 {
        constructor(a31) {
            const v33 = `
                switch (C29) {
                    case C29:
                        break;
                    case 255:
                        function F34() {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        break;
                }
                /\u{12345}/myvis;
            `;
            const v37 = v33.split(a31);
            try { v37.flatMap(eval); } catch (e) {}
        }
    }
    new C29(v28);
}
gc();
