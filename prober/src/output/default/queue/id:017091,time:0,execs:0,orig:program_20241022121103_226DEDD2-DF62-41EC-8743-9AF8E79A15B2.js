const o26 = {
    toString(a2, a3) {
        for (let v5 = 0; v5 < 10; v5++) {
            const o24 = {
                [undefined](a8, a9, a10) {
                    function F11(a13, a14, a15, a16) {
                        if (!new.target) { throw 'must be called with new'; }
                        class C17 {
                            constructor(a19, a20) {
                                let v21 = arguments;
                                v21 = 2;
                            }
                            #d = 2038722457;
                        }
                        new C17(a10, a3);
                    }
                    new F11();
                },
            };
            o24.undefined();
        }
        return a2;
    },
};
o26.toString();
gc();
