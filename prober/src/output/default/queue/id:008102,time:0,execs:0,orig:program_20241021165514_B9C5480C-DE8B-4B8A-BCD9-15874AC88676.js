for (let i = 0; i < 5; i++) {
    let o20 = {
        toString(a1, a2) {
            const v4 = Array();
            class C5 extends Array {
            }
            const v6 = new C5();
            const v7 = new C5();
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.__defineSetter__;
                a11.splice();
            }
            const v15 = new F8(v6, v7);
            const t14 = v15.constructor;
            const v17 = new t14(v15, v4);
            const v18 = v17.constructor;
            try { new v18(v7, v17); } catch (e) {}
        },
    };
    o20 *= o20;
}
gc();
