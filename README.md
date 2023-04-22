# zc_wujie
monorepo + pnpm + wujie + swc

cd zc_wujie

pnpm i

# add package common to main
pnpm -F main add common

# add package common to react_demo
pnpm -F react_demo add common

# add package common to vue_demo
pnpm -F vue_demo add common

# run project
pnpm -F react_demo run dev

# add all packages to project
pnpm i


