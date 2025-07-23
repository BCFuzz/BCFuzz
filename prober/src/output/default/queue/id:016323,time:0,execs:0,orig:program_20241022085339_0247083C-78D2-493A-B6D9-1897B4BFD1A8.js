const o14 = {
    set d(a1) {
        for (let i = 0; i < 25; i++) {
            function f2() {
                return f2;
            }
            function f3() {
                const o5 = {
                };
                const v7 = new Proxy(this, o5);
                try { v7.toString(); } catch (e) {}
            }
            f2[Symbol.toPrimitive] = f3;
            const o11 = {
                __proto__: f2,
            };
            Math.f16round(o11);
        }
    },
};
o14.d = o14;
for (const v16 of [0.7352152571225938,-932.9550217490919,4.0,0.06694281637208299,544965.3634962244]) {
    const v17 = [490.4264307705703,-195005.96089151688,-2.220446049250313e-16,1.0313758447661936e+308,980104.691805532,2.2250738585072014e-308,-0.0,-429.22112076774636,-1.0,1.6893125657306344e+308];
    const o18 = {
    };
    const v20 = new Proxy(v17, o18);
    v20.concat(v20, Proxy, Proxy);
}
gc();
