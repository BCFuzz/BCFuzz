for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
    #h;
    o(a12) {
        try { this.o(); } catch (e) {}
        this.#h;
    }
}
const v15 = new C10();
v15["o"]();
gc();
