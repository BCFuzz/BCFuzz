const o15 = {
    valueOf(a4) {
        function f10() {
            return undefined;
        }
        const v11 = f10();
        class C12 extends f10 {
            static #b = Date;
            static {
                v11.#b = v11;
            }
        }
        return eval;
    },
};
try { o15.valueOf(); } catch (e) {}
gc();
