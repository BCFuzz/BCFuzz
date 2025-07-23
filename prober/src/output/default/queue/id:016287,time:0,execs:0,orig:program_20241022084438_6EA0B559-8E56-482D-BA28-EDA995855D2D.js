const v1 = /\u{12345}/myvis.source;
const t1 = this.Function;
const v4 = t1(v1);
try { v4(); } catch (e) {}
gc();
