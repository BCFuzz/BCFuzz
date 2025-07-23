for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v11 = ("p").padEnd();
class C12 {
    constructor(a14) {
        const v16 = `
            this.__proto__;
            /\u{12345}/myvis;
        `;
        const v19 = v16.split(a14);
        try { v19.flatMap(eval); } catch (e) {}
    }
}
new C12(v11);
gc();
