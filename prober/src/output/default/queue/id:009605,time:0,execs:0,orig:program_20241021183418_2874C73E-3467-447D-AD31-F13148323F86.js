class C0 {
}
for (let v1 = 0; v1 < 25; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        const v5 = ("").split();
        Object.defineProperty(v5, 1, { value: C0 });
        v5.push(v1);
    }
    new F2();
}
gc();
