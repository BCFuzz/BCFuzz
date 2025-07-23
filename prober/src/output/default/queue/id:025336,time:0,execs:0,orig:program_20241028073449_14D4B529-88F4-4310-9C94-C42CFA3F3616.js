function f2(a3, a4, a5, a6) {
    const v7 = (1024).toString();
    const v8 = v7 !== v7;
    const v9 = (1.7976931348623157e+308).toString();
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
        eval();
        const v22 = `
            function f23(a24, a25) {
                for (let v26 = 0; v26 < 5; v26++) {
                    class C27 {
                        static o(a29) {
                            for (let v30 = 0; v30 < 5; v30++) {
                                try {
                                    class C32 {
                                    }
                                    class C33 extends C32 {
                                    }
                                    class C34 {
                                    }
                                    class C35 {
                                    }
                                    class C36 {
                                    }
                                    class C37 {
                                    }
                                    function f38() {
                                        return this;
                                    }
                                    const o39 = {
                                    };
                                    function F40() {
                                        if (!new.target) { throw 'must be called with new'; }
                                    }
                                    function f42(a43, a44) {
                                        return a44;
                                    }
                                    class C45 {
                                    }
                                    function f46(a47, a48) {
                                        return a47;
                                    }
                                    function f49(a50, a51) {
                                        return Date;
                                    }
                                    function f52(a53, a54, a55) {
                                        return C45;
                                    }
                                } catch(e56) {
                                }
                                class C57 extends Date {
                                }
                                for (let v58 = 0; v58 < 5; v58++) {
                                }
                            }
                        }
                    }
                }
                return a6;
            }
        `;
    }
    for (const v60 of v9.link(f2)) {
    }
    return v8;
}
f2();
gc();
