const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    let v10 = 10;
                    for ((() => {
                            for (let v11 = 0; v11 < 5; v11++) {
                            }
                        })();
                        v10--;
                        (() => {
                            const v14 = Int32Array(this);
                            try {
                            } catch(e15) {
                            } finally {
                                const v16 = v14.buffer;
                                try { v16.resize(v16, v16, 255, v16); } catch (e) {}
                            }
                        })()) {
                    }
                    return /\u{12345}/myvis;
                }
            `;
            const v19 = v8.split(a6);
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
