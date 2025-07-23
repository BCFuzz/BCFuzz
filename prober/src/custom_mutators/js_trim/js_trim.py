#!/usr/bin/env python3
# encoding: utf-8
from copy import deepcopy

def init(seed):
    pass

def deinit():  # optional for Python
    pass


#keep_line = []
#lines = []

def init_trim(buf):
    global current_testcase, current_testcase_ba, removed_line, trim_counter, lines_length
    global keep_line, lines
    current_testcase_ba = deepcopy(buf)
    current_testcase = current_testcase_ba.decode('utf-8', errors='ignore') # covert bytearray into str
    #current_testcase = buf
    lines = current_testcase.split("\n")
    lines_length = len(lines)
    keep_line = []
    for m in range(lines_length):
        keep_line.append(True)
    removed_line = lines_length - 1 # backward pass
    trim_counter = 0
    print("===========seed before trimming===========")
    print(current_testcase)
    #print("==========================================")
    return lines_length+1 # last iteration: remove nothing, but return final code

def trim():
    global removed_line, trim_counter, lines_length
    global keep_line, lines
    trim_counter +=1
    trimmed_testcase = ""
    #print(keep_line)
    for i in range(lines_length):
        if i == removed_line:
            continue
        if keep_line[i]==True:
            trimmed_testcase += lines[i]+"\n"
    
    
    trimmed_testcase = trimmed_testcase[0:-1]
    if len(trimmed_testcase) == 0:
        trimmed_testcase = "var a=1\n"
    if trim_counter == lines_length+1:
        print("===========seed after trimming===========")
        print(trimmed_testcase)
        print("==========================================")
    
    return bytearray(trimmed_testcase, encoding='utf-8') #convert str into bytearray

def post_trim(success):
    global removed_line, trim_counter
    global keep_line
    if success==1:
        keep_line[removed_line] = False
    else:
        keep_line[removed_line] = True
    removed_line -=1
    return trim_counter