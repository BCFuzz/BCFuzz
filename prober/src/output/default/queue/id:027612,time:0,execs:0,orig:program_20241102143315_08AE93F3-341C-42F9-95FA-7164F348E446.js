class C1 {
    constructor(a3) {
        const v5 = `
            /\u{12345}/myvis;
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        const v11 = v5.split(a3);
        v11.shift(v5, v11, eval);
        try { v11.flatMap(eval); } catch (e) {}
    }
}
new C1("d");
gc();
