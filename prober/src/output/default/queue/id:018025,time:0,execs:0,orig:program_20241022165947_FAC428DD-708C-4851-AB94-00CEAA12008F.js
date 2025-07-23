const v1 = new WeakSet();
const v2 = [490.4264307705703,-195005.96089151688,-2.220446049250313e-16,1.0313758447661936e+308,980104.691805532,2.2250738585072014e-308,-0.0,-429.22112076774636,-1.0,1.6893125657306344e+308];
const o3 = {
};
const v5 = new Proxy(v2, o3);
const o6 = {
    4: v1,
    "g": v5,
};
function f7() {
    return Proxy;
}
class C8 extends f7 {
    constructor(a10, a11) {
        for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
        }
        super();
        const v24 = Date(a10);
        const o25 = {
            [Math]: v24,
            "h": o6,
        };
        JSON.stringify(o25);
    }
}
new C8();
gc();
