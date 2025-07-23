function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    ~a5;
    this.a = a5;
}
const v7 = new F3(536870889);
const v8 = v7?.constructor;
try { new v8(5); } catch (e) {}
const v10 = new F3(536870889);
const v11 = new F3(v10);
function f12(a13, a14) {
    a13 | a13;
    a14 >> a14;
    const o21 = {
        ...v10,
        8: a13,
        "c": a14,
        "h": a14,
        set f(a18) {
            super[v11];
            v10.length = 2;
            v7[536870889] = a18;
        },
        __proto__: v7,
        [a14]: a13,
    };
    return o21;
}
const v23 = f12(536870889, 9007199254740992)?.constructor;
try { new v23(f12); } catch (e) {}
const v25 = f12(536870889, 5);
v25.f = v25;
f12(536870889, 9007199254740992);
const v30 = [-2106588061,1000,-2110605936,4294967297];
let v31 = `
    -257;
    /\u{12345}/myvis;
`;
try { v31.split(536870889, 536870889); } catch (e) {}
let v36 = eval;
v36.name;
v36(v31);
({"b":v36,...v31} = v30);
gc();
