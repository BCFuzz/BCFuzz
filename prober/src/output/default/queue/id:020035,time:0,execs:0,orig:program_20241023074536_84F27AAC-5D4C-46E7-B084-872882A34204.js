function f0(a1) {
    return arguments;
}
function f3(a4, a5, a6) {
    class C7 {
        #m(a9, a10) {
            const v11 = this.constructor;
            try { new v11(); } catch (e) {}
        }
        constructor(a14) {
            this.#m();
        }
    }
    return C7;
}
const v16 = f3(f3, f0, f0);
f0(v16);
new v16();
for (let i = 0; i < 250; i++) {
}
gc();
