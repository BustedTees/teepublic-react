# About
Components for rendering a TeePublic storefront.
[![test-status](https://travis-ci.org/BustedTees/teepublic-react.svg?branch=master)](https://travis-ci.org/BustedTees/teepublic-react)

# Installation 
`npm install teepublic-react`
or
`yarn add teepublic-react`

# Quick Start
These components are designed for responses from the TeePublic.com API.  With an API response from  `/v1/stores/{id}`, you can use the DesignCollection component to quickly show tiles.
```
import { DesignCollection } from 'teepublic-react'

class MyStore extends React.Component {
  render () {
    const avatarUrl = this.props.store_data.avatarUrl
    const bannerUrl = this.props.store_data.bannerUrl
    const designs   = this.props.store_data._embedded.designs
    const onClickHandler   = (design, sku) => {
      console.log(design);
      console.log(sku);
    }

    return (
      <div className='homepage'>
        <img src={bannerUrl}/>
        <br/>
        <img src={avatarUrl}/>

        <DesignCollection 
          designs={designs}
          tileSize="large"
          onDesignClick={ onClickHandler }
        />

      </div>
    );
  }
}
```

# Documentation
Additional Components Docs Pending!


# Devlopment Process
Clone the repo on your dev machine
`git clone https://github.com/BustedTees/teepublic-react`

`npm install` to install all dependencies

`npm start` to run the demo project

`npm publish` to publish the package on npm. You would need to change the version number in package.json

`git push -u origin <branch-name>` & create PR and get it reviewed




