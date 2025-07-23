function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
let v7 = /rdxyz??/ys;
let v8 = Int16Array;
let o9 = {
};
Object.defineProperty(o9, "d", { writable: true, value: "e" });
({"a":o9,"d":v8,...v7} = o9);
for (let i12 = 0, i13 = 10;
    i13++, i12 < i13;
    (() => {
        i13--;
        const v20 = new Set(v8);
        try { v20.forEach(F1); } catch (e) {}
    })()) {
    i13--;
}
gc();
