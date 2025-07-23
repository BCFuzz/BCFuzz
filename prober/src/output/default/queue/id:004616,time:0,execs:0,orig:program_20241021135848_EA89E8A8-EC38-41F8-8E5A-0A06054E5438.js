for (let v1 = 0; v1 < 10; v1++) {
    function f2() {
        return v1;
    }
    const v3 = f2();
    class C4 extends f2 {
        static #b = Date;
        static {
            this.prototype.constructor;
            try {
                v3.#b = v3;
            } catch(e8) {
            }
        }
    }
}
const v11 = new Float32Array(3008);
for (const v12 in v11) {
}
gc();
