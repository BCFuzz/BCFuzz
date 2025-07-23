class C0 {
}
const v1 = new C0();
const v4 = new Proxy([1073741824,-26526], v1);
for (let [i10, i11] = (() => {
        const v7 = new Int16Array(0);
        try { v7.toSorted(v4); } catch (e) {}
        return [0, 10];
    })();
    i10 < i11;
    i11--) {
}
gc();
