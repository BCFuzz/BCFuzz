for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
}
const v24 = new F20(F20, F20);
v24.a = v24;
for (const v25 in v24) {
    class C26 {
        constructor(a28) {
            const v30 = `
                function f31() {
                    /\u{12345}/myvis;
                    const o35 = {
                        set match(a34) {
                        },
                    };
                    return v24;
                }
            `;
            const v36 = v30.split(a28);
            try { v36.flatMap(eval); } catch (e) {}
        }
    }
    new C26(v25);
}
gc();
