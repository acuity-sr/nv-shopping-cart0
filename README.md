# A first demo of noun-and-verb

Annotated command history:


```
# create a directory for a demo
mkdir acuity-demo
cd acuity-demo
code .

# intialize the npm module
npm init -y

# install the prisma cli
npm install prisma --save-dev

# initialize a git repo
git init

# initialize a prisma schema
npx prisma init

git add .
git status
git commit -m "initial prisma generation"


# run the prisma generator (adds `@prisma/client` to package dependencies)
npx prisma generate
git status
# stage changes, so we can modify `schema.prisma` to add relational model
git add .

### off-script: add vanilla relational model to `schema.prisma`
# [see this for an example](https://github.com/acuity-sr/nv-shopping-cart/commit/1380669545b97f47b2133a73c18a4097d4325ce2#diff-5b443964f4f3a611682db8f7e02177b0a8c632b2039e2bd5e4dd7347815c565c)

npx prisma generate

git status
git add .
git commit -m "initial relational model"


# getting started with noun-and-verb
npm install tufan-io/noun_and_verb  --save-dev


### off-script: 
# - add noun_and_verb generator to `schema.prisma`
# - add any necessary annotations to the schema.
#    Supported annotations:
#     1. @readOnly
#     2. @createOnly
#     3. @writeOnly
#     4. @scalar
#     5. @seed
#     6. @mock
#     7. @directive
#     8. @default
#
# [see example here](https://github.com/acuity-sr/nv-shopping-cart/commit/c76a75ad6c53484705bca5211493e0d4f46f4f38#diff-5b443964f4f3a611682db8f7e02177b0a8c632b2039e2bd5e4dd7347815c565c)

git add .

# re-run the prisma generator
# this generates a working graphQL API server, bound to the prisma client
npx prisma generate

# run a prisma migration, so the database is properly configured
npm run migrate 

# start the db admin app, while the DB schema is configured, the DB is empty
npx prisma studio

# start the (dev mode) API server
npm run dev

# navigate to https://localhost:1234/graphql 
# click through to the apollo studio
# Try `findFirstUser` - it should return a null, since the DB is empty.

# In the Product model, we have added an image field with a mock value
# being declared as `faker.unsplash`. This requires an Unsplash API key. 
# The command above will complain. 
export UNSPLASH_ACCESS_KEY=$UNSPLASH

# the @seed + @mock annotations generate [seeder scripts](https://github.com/acuity-sr/nv-shopping-cart/blob/main/src/__tests__/fixtures/seeder/index.ts) which can be invoked to populate the DB with mock data.
npm run seed

# You might need to restart the prisma studio at this point. But it'll
# show a DB with data at this point. 
npx prisma studio

# windup and 
git add .
git commit -m "end of demo"
git push
```
