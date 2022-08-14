#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

if [ -z "$GITHUB_TOKEN" ]; then
    msg="deploy"
    push_addr="git@github.com:tenqaz/tenqaz.github.io.git"
else
    # 自动部署
    msg="auto deploy"
    push_addr="https://tenqaz:${GITHUB_TOKEN}@github.com/tenqaz/tenqaz.github.io.git"
    git config --global user.name "zhengwenfeng"
    git config --global user.email "326695231@qq.com"
fi

dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=gh-pages # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

git init
git add -A
git commit -m "${msg}"
git push -f $push_addr HEAD:$push_branch

cd -