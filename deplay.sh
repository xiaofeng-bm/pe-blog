#!/root/nginx/env sh

# cd blog

git pull 

npm run build

rm -rf /root/nginx/upload/pe-blog

mv docs/.vuepress/dist/ /root/nginx/upload/pe-blog
