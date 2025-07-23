for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let v20 = 0; v20 < 25; v20++) {
    function f21() {
        return v20;
    }
    class C22 extends f21 {
        #o() {
        }
        valueOf() {
            this.#o();
        }
    }
    const v27 = createGlobalObject();
    try { v27.load(createGlobalObject); } catch (e) {}
    const v29 = new C22();
    for (let i32 = 0, i33 = 10; i32 !== i33; i33--) {
    }
    const v41 = new Int8Array(v20);
    for (const v42 in v41) {
        v29.valueOf();
    }
}
for (let i46 = -65536, i47 = 10; i47--, i46 < i47;) {
}
gc();
