function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -31037;
    this.h = -31037;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v6;
try { v6 = v5.valueOf(v4, v5, v5); } catch (e) {}
("number").trimStart();
const v10 = [268435456];
try { v10.concat(v3, v10); } catch (e) {}
[-4294967297,5,-9007199254740990,9223372036854775807,-33460,-11];
const v13 = [-9007199254740992,-4096,3,1073741824,-9007199254740990,-1,2,5890,-4294967296,4294967297];
try { v13.flatMap(v6); } catch (e) {}
class C15 {
}
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v18 = 0; v18 < 5; v18++) {
        const v19 = `
            v6[v19] = v19;
            const t23 = "d";
            t23[Symbol.hasInstance] = v19;
        `;
        const v22 = v19.split(v18);
        v22.reverse();
        try { C15.constructor(v22); } catch (e) {}
    }
}
new F16();
gc();
