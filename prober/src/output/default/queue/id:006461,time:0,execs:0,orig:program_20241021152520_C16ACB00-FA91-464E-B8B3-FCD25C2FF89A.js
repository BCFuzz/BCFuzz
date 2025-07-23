function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = `
    let v4 = -50716;
    for (let v5 = 0; v5 < 5; v5++) {
        function F6() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v8 = new F6();
        const v9 = v8?.constructor;
        try { v9(); } catch (e) {}
        true && true;
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { F13(F13, true); } catch (e) {}
        const v18 = new F13();
        v18[-2] = v4;
        v18.a = v18;
        for (let v19 = 0; v19 < 5; v19++) {
        }
        let v20 = 0;
        do {
            try {
            const t0 = true;
            t0();
            } catch (e) {}
            f = v18[-2];
            v8.__proto__;
            v2[536870888] = v4;
            v20++;
        } while ((() => {
                const v26 = v20 < 2;
                v26 && v26;
                return v26;
            })())
    }
    ++v4;
`;
eval(v3);
gc();
