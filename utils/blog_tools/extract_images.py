from ast import main
from asyncore import read
from email import header


#!/usr/bin/env python
# -*- encoding: utf-8 -*-

'''
@File: extract_images.py
@Time: 2022/08/17 14:46:02
@Author: Jim
@Contact: zhengwenfeng37@gmail.com
@Desc: 用来提取出博客中图床的图片
'''

import re
import requests
import os
import sys

def main():
    
    if len(sys.argv) < 2:
        print("需要填写文件路径!")
        return
    

    # extract_file = "D:\\code\\tenqaz.github.io\\docs\\03.计算机\\02.k8s之docker容器.md"
    extract_file = sys.argv[1]

    with open(extract_file, "r", encoding="utf8") as f:
        data = f.read()
    

    group = re.findall(r"https://.*png", data)
    
    for i in group:
        
        resp = requests.get(i)
        
        file_name = os.path.basename(i)

        with open(file_name, "wb") as f:
            f.write(resp.content)
        

    print("完成导出..")


if __name__ == '__main__':
    main()