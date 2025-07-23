for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
class C11 {
}
const v12 = new C11();
const v13 = `
    const v14 = [v13,v12,"d",v13];
    function F15(a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        let v19 = a18.search(v14);
        const v20 = v19--;
        v20 | v20;
        function F23() {
            if (!new.target) { throw 'must be called with new'; }
            for (let i26 = 1.2848147998924302e+308, i27 = 10;
                (() => {
                    for (let i30 = -3, i31 = 10; i30 < i31;) {
                    }
                    /J(?<a>(?<b>(?<c>(?<d>.).).).)a||bc/dyis;
                    /i(?<a>.)\k<a>[\c~]?/mygi;
                    return i26 < i27;
                })();
                ) {
            }
        }
    }
    new F15(v13, v13);
`;
eval(v13);
gc();
