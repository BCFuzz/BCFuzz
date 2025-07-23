for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C11 extends String {
    static {
        const v13 = `
            function* f14(a15, a16) {
                return yield a15;
            }
            f14().next(f14);
            /\u{12345}/myvis;
        `;
        eval(v13);
    }
}
gc();
