const v1 = Date();
class C2 extends Date {
}
const v3 = new C2();
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
}
for (let i16 = -3, i17 = 10; i17--, i16 <= i17;) {
}
const v26 = new Int8Array(255);
for (const v27 in v26) {
    class C28 {
        constructor(a30) {
            const v32 = `
                class C33 {
                    constructor() {
                        switch (this) {
                            case 255:
                                break;
                            case v1:
                                v3.setDate(a30);
                                break;
                        }
                    }
                    /*
                    constructor(a37) {
                        /\u{12345}/myvis;
                    }
                    */
                }
            `;
            const v39 = v32.split(a30);
            try { v39.flatMap(eval); } catch (e) {}
        }
    }
    new C28(v27);
}
gc();
