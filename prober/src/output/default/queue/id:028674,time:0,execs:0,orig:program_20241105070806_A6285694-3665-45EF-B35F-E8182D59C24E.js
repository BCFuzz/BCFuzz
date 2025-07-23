for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 10; v10++) {
    function f11() {
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
    for (let v18 = 0; v18 < 25; v18++) {
    }
    const v19 = new Int8Array(v10);
    for (const v20 in v19) {
        v16.valueOf();
    }
}
for (let i24 = 0, i25 = 10; i25--, i24 < i25;) {
}
gc();
