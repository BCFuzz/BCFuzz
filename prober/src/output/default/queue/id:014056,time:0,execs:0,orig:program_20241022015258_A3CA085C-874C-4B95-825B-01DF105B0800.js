function f0() {
}
const v1 = f0.apply(f0);
function f2() {
    class C4 {
        static #d = 2147483647;
        static {
            this.#d ||= this;
        }
    }
    let v6;
    try { v6 = v1.set(C4, 2147483647); } catch (e) {}
    return Array(v6);
}
const v11 = new Float64Array(257);
for (const v12 of v11) {
    class C13 extends f2 {
    }
    new C13();
}
gc();
