const v2 = [16,37822,-60486934,2086949201,1053840339];
const v3 = [-12,-656784266,-8,-32139,-13,10];
const v5 = `
    class C6 {
    }
    const v7 = new C6();
    function f8(a9, a10, a11) {
        const o12 = {
        };
        return o12;
    }
    f8(C6);
    const v14 = f8(C6);
    v14.d = v14;
    for (let v15 = 0; v15 < 5; v15++) {
        v15 / v15;
        function F17() {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F17();
        function F20(a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F20();
        const v25 = new F20();
        let v26;
        try { v26 = v25.hasOwnProperty(5); } catch (e) {}
        for (let v27 = 0; v27 < 5; v27++) {
            class C30 {
                #d = 10n;
                static [10n] = 45373n;
            }
            C30[10] = C30;
            try { v26(v3); } catch (e) {}
            const v32 = v2[v7];
            -1.184670302248617e+308 == WeakSet ? -1.184670302248617e+308 : WeakSet;
            try { v26(v32); } catch (e) {}
        }
    }
`;
eval(v5);
gc();
