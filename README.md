<p align="center" style="display:flex; align-items:center; justify-content:center;">
  <a href="https://www.gatsbyjs.com" style="margin:1rem;">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" height="60"/>
  </a>
  <a href="https://www.snipcart.com" style="margin:1rem;">
    <img alt="Snipcart" src="https://snipcart.com/media/204311/data-structure-logo.png" width="60" height="60"/> 
  </a>
  <a href="https://www.sanity.io" style="margin:1rem;">
    <img alt="Sanity" src="https://www.sanity.io/static/images/logo.png" width="120" height="30"/>
  </a>
</p>
<h1 align="center">
  A Gatsby + Snipcart + Sanity E-commerce starter
</h1>

## 🚀 Quick start

1.  Clone the repo

    ```shell
    git clone https://github.com/stordahl/gatsby-snipcart-sanity.git

    # or with github CLI
    gh repo clone stordahl/gatsby-snipcart-sanity
    ```

2.  Install all dependencies within the Gatsby Front-End

    ```shell
    cd gatsby-snipcart-sanity/gatsby
    npm i
    ```

3.  Delete the 'content' directory & run the following commands from the Gatsby directory
    ```shell
    cd ..
    npm install -g @sanity/cli 
    sanity init
    ```
    and then follow the CLI instructions to spin up a new Sanity Project. Learn more about the Sanity CLI [here](https://www.sanity.io/docs/getting-started-with-sanity-cli).

4. Place your Sanity *project ID & dataset name*, as well as you *Snipcart API key* into gatsby-config.js 

5. Edit the details of *gatsby-plugin-manifest* in gatsby-config.js


## 👋 Contributing

If you'd like to contribute to this starter, just make a PR! Also, if you'd like to help me maintain the codebase at all, just get in touch. This would be a great opportunity for people who are new to contributing to OSS!


## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/stordahl/gatsby-snipcart-sanity)

## 📣 Shoutouts
This starter inspired by [Wes Bos'](https://github.com/wesbos) *Master Gatsby* course, as well as the gatsby-snipcart starter by [Issy Dennis](https://github.com/issydennis/gatsby-snipcart)
