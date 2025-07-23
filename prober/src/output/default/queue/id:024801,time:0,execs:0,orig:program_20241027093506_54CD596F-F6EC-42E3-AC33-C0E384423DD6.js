const v0 = [];
const o1 = {
    __proto__: v0,
};
class C2 {
    constructor(a4, a5) {
        for (let v6 = 0; v6 < 500; v6++) {
        }
        let v7;
        try { v7 = a4(); } catch (e) {}
        const v8 = `object${v7}-1126020689${o1}boolean`;
        this[v8] = v8;
    }
}
new C2();
new C2();
gc();
