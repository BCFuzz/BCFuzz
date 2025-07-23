for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 25; v10++) {
    function f11() {
        return v10;
    }
    class C12 extends f11 {
        #o() {
            super[this] = this;
        }
        valueOf() {
            this.#o();
        }
    }
    const v16 = new C12();
    const v18 = new Int8Array(v10);
    for (const v19 in v18) {
        v16.valueOf();
    }
}
for (let i23 = 0, i24 = 10; i24--, i23 < i24;) {
}
gc();
