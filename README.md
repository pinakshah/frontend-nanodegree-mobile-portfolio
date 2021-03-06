## Frontend Nanodegree Mobile Portfolio

This is mobile portfolio application which displays project portfolio.

To get started, check out the repository, follow the instructions to build the source.

`NOTE: Before you getting started, make sure you have nodejs install on your system.`

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
2. Download and Install GraphicsMagick from [here]. (http://www.graphicsmagick.org/download.html)
  `If you're a Mac user, you can install by following command:
    brew install GraphicsMagick
  Alternatively, you can install by following commands:
    $ sudo add-apt-repository ppa:dhor/myway
    $ sudo apt-get update
    $ sudo apt-get install graphicsmagick`
  
  `NOTE: I have used here GraphicsMagick engine here while generating responsive images. You can use other engine like ImageMagick as well. You just need to change engine from "gm" to "im" for task - responsive_images in the package.json.`  
  
3. Install grunt client if you have not installed it by executing following command in console.

  ```bash
  npm install -g grunt-cli
  ```
3. Install grunt modules by executing following command in console. It will install all the modules provided in the **package.json**

  ```bash
  npm install
  ```

4. Execute following command to build the project. It will create the dist folder with all the optimized resources.
  ```bash
  grunt
  ```
5. Open the dist/index.html to view index page and dist/views/pizza.html to open pizza.html

`NOTE: To run application on a local server, you can use IIS or python server.`
