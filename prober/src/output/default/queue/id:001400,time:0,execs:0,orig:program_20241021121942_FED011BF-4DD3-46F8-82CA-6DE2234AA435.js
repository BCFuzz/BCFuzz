class C0 {
    #h;
    o(a2) {
        this.#h;
    }
}
const v4 = new C0();
const v6 = new Uint8ClampedArray();
const v9 = new Float64Array(9);
for (const v10 of v9) {
    v4["o"]();
    v6[512] = v10;
}
gc();
