function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v7 = new Int16Array(3681);
for (let [i12, i13] = (() => {
        v4[Symbol.search] = F0;
        return [0, 10];
    })();
    i13;
    i13--) {
}
for (const v19 in v7) {
    class C20 {
    }
    const v21 = new C20();
    const v23 = this.constructor;
    v23.assign(v21, v23, v4);
}
gc();
