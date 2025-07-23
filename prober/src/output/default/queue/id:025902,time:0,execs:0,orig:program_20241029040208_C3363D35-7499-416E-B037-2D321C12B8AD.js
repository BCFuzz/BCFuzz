for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
class C11 {
    constructor(a13) {
        const v15 = `
            for (let v16 = 0; v16 < 5; v16++) {
            }
            /\u{12345}/myvis;
        `;
        const v18 = v15.split(a13);
        try { v18.flatMap(eval); } catch (e) {}
    }
}
new C11("f");
gc();
