const v0 = /abc|def(\2)(\1)?/su;
v0.exec(v0);
gc();
