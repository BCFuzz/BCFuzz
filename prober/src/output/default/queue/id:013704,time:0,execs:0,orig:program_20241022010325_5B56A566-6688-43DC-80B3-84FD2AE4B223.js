class C0 {
}
class C1 extends C0 {
    constructor(a3, a4) {
        super();
        const v5 = `
            /\u{12345}/myvis;
            eval("", eval);
        `;
        eval(v5);
    }
}
new C1();
gc();
