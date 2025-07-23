const v0 = /(KZa{0,1}?cqv6\p{General_Category=Decimal_Number}?)/mysu;
let v1 = -170.6269447348434;
let v2 = -5;
({"c":v1,"flags":v1,"source":v2,} = v0);
const v4 = new Int8Array(v0, v1, v0);
const v6 = v4["reverse"]();
Object.defineProperty(v6, "constructor", { writable: true, value: v2 });
try { v6.subarray(); } catch (e) {}
gc();
