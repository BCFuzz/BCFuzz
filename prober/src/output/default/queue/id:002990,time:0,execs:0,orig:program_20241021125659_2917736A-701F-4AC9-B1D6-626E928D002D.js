class C1 {
    static #f;
    get f() {
        try {
            this.#f = 131;
        } catch(e3) {
            e3.line = e3;
        }
    }
}
const v4 = new C1();
const v7 = new Uint8Array(156);
const v8 = -Infinity;
const v9 = [-0.0,-0.0];
const v11 = [];
const v12 = v9.fill;
v4.f /= v8;
Reflect.apply(v12, v7, v11);
gc();
