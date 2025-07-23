class C2 extends Array {
}
const v4 = `
    for (let v5 = 0; v5 < 5; v5++) {
        function F6() {
            if (!new.target) { throw 'must be called with new'; }
        }
        F6.prototype;
        const v9 = new F6();
        try { v9.constructor(); } catch (e) {}
        class C12 {
            b;
            static #d = -9007199254740992;
        }
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { F13(v5, 26013n); } catch (e) {}
        const v18 = new F13();
        const v19 = v18?.__defineGetter__;
        try { v19(C2, C2); } catch (e) {}
        let v21;
        try { v21 = v18.hasOwnProperty(5); } catch (e) {}
        const v24 = new Int8Array(7);
        v24[2] = 5.965564179801646;
        v21 || v21;
        for (let v27 = 0; v27 < 5; v27++) {
            45373n !== 45373n;
            class C31 {
                #d = 10n;
            }
        }
    }
`;
eval(v4);
gc();
