const v2 = [WeakSet,[WeakSet,WeakSet,WeakSet]];
const o3 = {
    __proto__: v2,
};
class C4 {
    constructor(a6, a7) {
        for (let v8 = 0; v8 < 500; v8++) {
        }
        let v9;
        try { v9 = a6(); } catch (e) {}
        const v10 = `object${v9}-1126020689${o3}boolean`;
        this[v10] = v10;
    }
}
new C4(v2, o3);
new C4(v2, o3);
gc();
