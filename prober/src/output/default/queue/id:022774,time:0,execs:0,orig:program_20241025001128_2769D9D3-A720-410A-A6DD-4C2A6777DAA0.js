function f0(a1, a2) {
    return f0;
}
const v3 = f0();
class C4 extends f0 {
}
const v5 = new C4();
function f6(a7) {
    const o30 = {
        n(a9, a10) {
            try { this.toString(); } catch (e) {}
            for (let i = 0; i < 5; i++) {
                for (let v12 = 0; v12 < 250; v12++) {
                    v12++;
                    v12--;
                }
                function F15(a17, a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                try { new F15(f6, v3, f6); } catch (e) {}
                const v21 = new F15();
                const v22 = v21?.toLocaleString;
                try { new v22(); } catch (e) {}
                const v24 = new F15();
                const v25 = new F15();
                const t25 = v25.constructor;
                new t25(v5, v24);
                try {
                    super.slice();
                } catch(e29) {
                }
            }
            return this;
        },
    };
    return o30;
}
const v31 = f6();
v31.n();
const v33 = f6(v31);
function f34(a35, a36) {
    a35.n(v31, a35, a36, a36);
    a35.n();
    return f6;
}
f34(v31);
f34(v33);
gc();
