# About
Components for rendering a TeePublic storefront.
![test-status](https://travis-ci.org/BustedTees/teepublic-react.svg?branch=master)

# Installation 
`npm install teepublic-react`


# Store Page
```
import { TeepublicDesignCollection } from 'teepublic-react'
<TeepublicDesignCollection  storeType="Affiliate" storeSlug="wishlist" />
```

# Product Page
```
import { TeepublicProduct } from 'teepublic-react'
<TeepublicProduct  designId={123} defaultCanvas="tshirt" />
```

# Checkout Page
```
import { TeepublicCheckout } from 'teepublic-react'
<TeepublicCheckout  />
```


# Devlopment Process
Clone the repo on your dev machine
`git clone https://github.com/BustedTees/teepublic-react`

`npm install` to install all dependencies

`npm start` to run the demo project

`npm publish` to publish the package on npm. You would need to change the version number in package.json

`git push -u origin <branch-name>` & create PR and get it reviewed




