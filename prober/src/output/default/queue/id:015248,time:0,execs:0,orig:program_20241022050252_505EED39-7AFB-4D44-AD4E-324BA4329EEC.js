const v2 = /\u{12345}OhEC/dys.toString;
try { v2.call(9n); } catch (e) {}
gc();
