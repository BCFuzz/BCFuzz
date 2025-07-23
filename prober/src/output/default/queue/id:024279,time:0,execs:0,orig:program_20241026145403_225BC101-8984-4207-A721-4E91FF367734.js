const v1 = new Uint16Array();
const v2 = [v1,v1];
const o3 = {
    __proto__: v2,
};
class C4 {
    constructor(a6, a7) {
        a6[1] = a6;
        for (let v8 = 0; v8 < 500; v8++) {
        }
        let v9;
        try { v9 = a6(); } catch (e) {}
        const v10 = `object${v9}-1126020689${o3}boolean`;
        this[v10] = v10;
    }
}
const v11 = new C4(v2);
const t17 = v11.constructor;
new t17(v1);
gc();
