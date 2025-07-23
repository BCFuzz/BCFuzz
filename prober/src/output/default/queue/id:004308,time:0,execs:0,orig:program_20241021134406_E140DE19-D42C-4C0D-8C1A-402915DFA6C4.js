const v2 = [16,37822,-60486934,2086949201,1053840339];
const v3 = [-12,-656784266,-8,-32139,-13,10];
const v5 = `
    class C6 {
    }
    const v7 = new C6();
    function f8(a9, a10, a11) {
        const v12 = [621427.1856124508,-Infinity,-2.7178248356014167,8.632153995786645,0.5803215404700105,-2.2250738585072014e-308,-847.8313472290884,403555.2158886029,1.7976931348623157e+308,-2.220446049250313e-16];
        const o15 = {
            set d(a14) {
            },
            [v12]: 5,
        };
        return o15;
    }
    f8(C6);
    const v17 = f8(C6);
    v17.d = v17;
    for (let v18 = 0; v18 < 5; v18++) {
        v18 / v18;
        function F20() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v22 = new F20();
        function F23(a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = v22;
        }
        new F23();
        const v28 = new F23();
        let v29;
        try { v29 = v28.hasOwnProperty(5); } catch (e) {}
        for (let v30 = 0; v30 < 5; v30++) {
            class C33 {
                #d = 10n;
                static [10n] = 45373n;
            }
            C33[10] = C33;
            try { v29(v3); } catch (e) {}
            const v35 = v2[v7];
            -1.184670302248617e+308 == WeakSet ? -1.184670302248617e+308 : WeakSet;
            try { v29(v35); } catch (e) {}
        }
    }
`;
eval(v5);
gc();
