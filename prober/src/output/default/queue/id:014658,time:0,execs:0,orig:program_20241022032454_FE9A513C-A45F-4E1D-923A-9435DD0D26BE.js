const v1 = ["dd"];
const v2 = /\u{12345}\u{23456}/ygiu;
const v4 = this.ArrayBuffer;
const v6 = this.constructor.assign(v2);
try { v6.compile(v4, v1); } catch (e) {}
gc();
