class C3 {
    static #d = 2147483647;
    static {
        this.#d ||= this;
    }
}
const v27 = Math.ceil;
const v28 = v27.bind(v27, v27, v27, 1000);
const v29 = v28.bind(v28, Int16Array, v27, "setTime", 3);
try { new v29(v27, C3, 3026); } catch (e) {}
gc();
