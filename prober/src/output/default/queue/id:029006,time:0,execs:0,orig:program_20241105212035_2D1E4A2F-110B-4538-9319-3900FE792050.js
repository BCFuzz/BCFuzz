for (let i2 = 0, i3 = 1176; i3--, i2 < i3;) {
}
const o12 = {
    set d(a11) {
    },
};
for (let i15 = 1, i16 = 10; i15 < i16; i16--) {
}
for (const v23 in o12) {
    class C24 {
        constructor(a26) {
            const v28 = `
                with (URIError(v23).__proto__) {
                    class C33 extends Int16Array {
                    }
                }
            `;
            const v34 = v28.split(a26);
            try { v34.flatMap(eval); } catch (e) {}
        }
    }
    new C24(v23);
}
gc();
