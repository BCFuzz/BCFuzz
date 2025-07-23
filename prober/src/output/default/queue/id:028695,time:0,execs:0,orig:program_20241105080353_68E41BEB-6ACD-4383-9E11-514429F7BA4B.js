class C0 {
}
function f1(a2) {
    const v3 = /foo|(bar|baz)|quux(?:ab)|cde/vgi;
    function f4(a5, a6) {
        const v8 = [f1];
        v8[3329] = -4;
        const v9 = v8.toLocaleString();
        /\P{Any}/du;
        const v12 = 2147483648 + v9;
        try { v12.replaceAll(v3, C0); } catch (e) {}
        for (let v14 = 0; v14 < 5; v14++) {
        }
        return a5;
    }
    v3[Symbol.toPrimitive] = f4;
    const o22 = {
        [v3](a18, a19, a20, a21) {
        },
    };
    for (let i25 = 0, i26 = 10;
        i25 !== i26;
        (() => {
            i26--;
            const v31 = Symbol.iterator;
            const o34 = {
                [v31]() {
                    const o33 = {
                    };
                },
            };
        })()) {
    }
    return f1;
}
f1();
gc();
