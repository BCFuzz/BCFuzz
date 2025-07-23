for (let i3 = 0, i4 = 10; i4--, i3 < i4;) {
}
class C11 {
    constructor(a13) {
        const v15 = `
            this.__proto__;
            /\u{12345}/myvis;
        `;
        v15.split(a13).flatMap(eval);
    }
}
try { new C11("h"); } catch (e) {}
gc();
