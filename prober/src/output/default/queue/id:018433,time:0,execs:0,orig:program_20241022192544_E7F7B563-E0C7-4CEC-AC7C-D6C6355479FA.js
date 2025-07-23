const o6 = {
    [undefined](a3, a4, a5) {
    },
};
function f7() {
    const v8 = `
        /\u{12345}/myvis;
        const v12 = new Uint8Array(3144);
        class C13 extends Uint8Array {
            static {
                super[C13 + v12];
            }
        }
    `;
    eval(v8);
    return f7;
}
f7();
f7();
gc();
