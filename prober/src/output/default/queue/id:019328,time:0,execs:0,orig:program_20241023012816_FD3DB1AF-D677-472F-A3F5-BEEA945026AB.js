class C0 {
    #valueOf(a2, a3, a4) {
    }
    constructor(a6, a7) {
        try { a7(a7); } catch (e) {}
    }
}
class C9 extends C0 {
}
for (let i13 = 0, i14 = 10 + 10;
    (() => {
        i14--;
        const v16 = i13 < i14;
        new C9();
        return v16;
    })();
    ) {
    for (let v22 = 0; v22 < 250; v22++) {
    }
}
gc();
