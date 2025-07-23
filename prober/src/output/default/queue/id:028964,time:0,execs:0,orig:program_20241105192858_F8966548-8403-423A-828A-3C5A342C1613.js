for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
    static n(a12, a13) {
        const v14 = `
            function f15(a16, a17) {
                /\u{12345}/myvis;
                var arguments = Symbol;
                return f15;
            }
        `;
        for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
        }
        eval(v14);
    }
}
try { C10.n(); } catch (e) {}
gc();
