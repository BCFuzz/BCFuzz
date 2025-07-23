const v1 = [7,7,7,7];
class C2 {
    #c;
    constructor(a4, a5, a6, a7) {
        try {
            v1.#c = 7;
        } catch(e8) {
            e8 = a4;
        }
    }
}
new C2();
gc();
