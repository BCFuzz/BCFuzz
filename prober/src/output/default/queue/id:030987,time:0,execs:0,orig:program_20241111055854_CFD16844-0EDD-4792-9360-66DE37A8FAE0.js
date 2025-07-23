function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
for (let i9 = 0, i10 = "0o5" + 10;
    (() => {
        for (let i13 = 0, i14 = 10; i10--, i13 < v4;) {
        }
        return i10;
    })();
    ) {
}
for (let [i75, i76] = (() => {
        for (let i27 = 0, i28 = 10; i28--, i27 < i28;) {
        }
        for (let i37 = 0, i38 = 10; i37 < i38; i38--) {
        }
        const v46 = `
            const o52 = {
                toString(a49, a50) {
                    /\u{12345}/myvis;
                    return 3614;
                },
            };
            typeof 3614 !== "object";
        `;
        const v57 = v46.split(v46[6]);
        v57.reverse();
        let v59;
        try { v59 = v57.flatMap(runString); } catch (e) {}
        for (let i61 = -4294967295, i62 = v59; i62--;) {
        }
        const v73 = createGlobalObject().WebAssembly.instantiate();
        v73.then(v73, createGlobalObject);
        return [1024, 10];
    })();
    (() => {
        const v77 = i75 === i76;
        return v77 && v77;
    })();
    ) {
}
for (let i85 = 0, i86 = 10; i85 < i86; i86--) {
}
gc();
