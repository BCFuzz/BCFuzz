for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let i12 = -3, i13 = 10; i13--, i12 <= i13;) {
    for (let i22 = 0, i23 = 4096; i22 < i23; i23--) {
    }
}
const v32 = new Int8Array(255);
for (const v33 in v32) {
    class C34 {
        constructor(a36) {
            const v38 = `
                class C39 {
                    constructor() {
                        switch (this) {
                            case 255:
                                try { a36(eval, this); } catch (e) {}
                                break;
                        }
                    }
                    /*
                    constructor(a43) {
                        /\u{12345}/myvis;
                    }
                    */
                }
            `;
            const v45 = v38.split(a36);
            try { v45.flatMap(eval); } catch (e) {}
        }
    }
    new C34(v33);
}
gc();
