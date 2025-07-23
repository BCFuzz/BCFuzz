for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = /[a{0}]/dygisu;
class C12 {
    constructor(a14) {
        const v16 = `
            switch (undefined) {
            }
            /\u{12345}/myvis;
        `;
        const v18 = v16.split(a14);
        try { v18.flatMap(eval); } catch (e) {}
    }
}
new C12(v11);
gc();
