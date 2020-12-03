<p align="center">
  <img src="https://i.ibb.co/KjqyRKG/gatsbysnipcartsanity.png" alt="Gatsby Snipcart Sanity Logos" />
</p>
<h1 align="center">
  A
  <a href="https://www.gatsbyjs.com" style="margin:1rem;">
    Gatsby
  </a>
  +
  <a href="https://www.snipcart.com" style="margin:1rem;">
    Snipcart
  </a>
  +
  <a href="https://www.sanity.io" style="margin:1rem;">
    Sanity
  </a>
  E-commerce starter
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

## 🚗 Roadmap
Features currently in development for future versions:
- [ ] Add digital goods via Sanity Studio, & conditionally render in storefront
- [ ] Create more robust theme system for easy theming via single js file
- [ ] Add Store/Shop data type to Sanity for things like store name, social links, etc

## 📣 Shoutouts
This starter inspired by [Wes Bos'](https://github.com/wesbos) *Master Gatsby* course, as well as the gatsby-snipcart starter by [Issy Dennis](https://github.com/issydennis/gatsby-snipcart)
