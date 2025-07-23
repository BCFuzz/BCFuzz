class C0 {
}
const v1 = new C0();
const v2 = new C0();
class C3 {
    #e = v1;
    constructor(a5, a6, a7, a8) {
        try {
            a6.#e = a8;
        } catch(e9) {
        }
    }
}
const v10 = new C3();
new C3(v2, v2);
new C3(v2, v10);
const v15 = new Float32Array(3008);
for (const v16 in v15) {
}
gc();
