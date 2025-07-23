for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                class C19 {
                    constructor() {
                        switch (this) {
                            case this:
                                break;
                            case 255:
                        }
                    }
                }
            `;
            const v21 = v18.split(a16);
            try { v21.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
