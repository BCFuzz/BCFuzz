function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
new F0();
const v5 = new F0();
v5.b = v5;
const v6 = [];
const v7 = [v3];
class C8 {
    #a = v6;
}
class C12 {
}
new C12();
v7.constructor;
class C15 {
}
const v16 = new C15();
const t19 = v16.constructor;
new t19();
const v21 = [-48456,-19867,-3,2,536870887];
const v23 = -43988 << -43988;
v23 > v23;
const v26 = -10 / -10;
v26 & v26;
try { v21.every(); } catch (e) {}
const v29 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v34 = new Map();
v34.has?.apply;
let v37 = v34 | v29;
-v37;
const v39 = v37++;
const v40 = v39 >>> v39;
v40 - v40;
for (let v42 = 0; v42 < 5; v42++) {
    const v44 = ("p").search();
    v44 - v44;
    v44 - v44;
    const v48 = ("p" + v44).codePointAt;
    v48.name;
    let v52;
    try { v52 = v48.call(); } catch (e) {}
    v52 * v52;
}
let v54 = 128;
v54--;
("").trimStart().trimEnd();
eval();
gc();
