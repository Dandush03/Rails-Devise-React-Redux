# Rails Devise with React&Redux Template
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield2]][linkedin-url2]
[![Hireable][hireable]][hireable-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
 <h2 align="center"> Rails with Devise Auth & React&Redux </h2>

  <p align="center">
    <br />
    <a href="https://github.com/Dandush03/Rails-Devise-React-Redux"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/Dandush03/Rails-Devise-React-Redux/issues">Report Bug</a>
    ·
    <a href="https://github.com/Dandush03/Rails-Devise-React-Redux/issues">Request Feature</a>
  </p>

</p>

### Table of Contents
* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Required Installations](#Required-Installations)
  * [Installing](#Installing)
  * [Instructions](#Instructions)
  * [Deploy](#Deploy)
* [Contact](#contact)
* [Contributing](#Contributing)
* [Show your support](#Show-your-support)

## About The Project

This project is mean to let you compare between two stocks which let you compare and help you on your decision for wich one to inveset, rigth now it uses a small group of companies (Mostly from Nasdaq) in feture release will upgrade our companies list

<p align="center">
  <img height="400" src="">
</p>

### Built With
The project was developed using the following technologies:
- [Ruby](https://www.ruby-lang.org/)
- [Rails](https://rubyonrails.org/)
- [Devise](https://github.com/heartcombo/devise)
- [React](https://es.reactjs.org/)
- [Redux](https://redux.js.org/)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Sass](https://sass-lang.com/)
- [EsLint](https://eslint.org/)

## Required Installations

### Installing

<p>Install the following to get this project running in your machine:</p>

### Instructions

<p>Follow these steps:</p>

Clone the Repository

```Shell
user@pc:~$ git clone https://github.com/Dandush03/Rails-Devise-React-Redux.git
```

Click on the console and to go to the folder that was created

```Shell
user@pc:~$ cd Rails-Devise-React-Redux 
user@pc:~$ bundle install
```

```Shell
user@pc:~$ cd client
user@pc:~$ npm install
```

```Shell
user@pc:~$ cd ..
user@pc:~$ rake start
```

It will lunch your browser at http://localhost:3000/

### Deploy

For deploying this project to Heroku you most first install/login Heroku in your local machine and then you can follow these steps.

First will create the application

```Shell
user@pc:~$ heroku create AppName
```

Then will tell Heroku to start by building the node app using package.json, and then build the rails app

```Shell
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```

And now we can deploy the app by pushing it to Heroku

```Shell
git push heroku master
```

And that is it. Now you can open use your app in Heroku.

## Contact

👤 **Daniel Laloush**
 - Portfolio: [dlaloush.me](https://dlaloush.me) 
 - LinkedIn: [Daniel Laloush](https://www.linkedin.com/in/daniel-laloush-0a7331a9) 
 - Github: [@Dandush03](https://github.com/Dandush03) 
 - Twitter: [@d_laloush](https://twitter.com/d_laloush) 

<p align="center">

  Project Link: [https://github.com/Dandush03/Rails-Devise-React-Redux](https://github.com/Dandush03/Rails-Devise-React-Redux)

</p>

## Special Thanks

Thanks to [Microveser](https://www.microverse.org/) for this great learning expirance and for guiding me on my path as a full stack developer

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Dandush03/Rails-Devise-React-Redux/issues).

## Show your support

Give a ⭐️ if you like this project!

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Dandush03/React-Calculator.svg?style=flat-square
[contributors-url]: https://github.com/Dandush03/Rails-Devise-React-Redux/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Dandush03/Rails-Devise-React-Redux.svg?style=flat-square
[forks-url]: https://github.com/Dandush03/Rails-Devise-React-Redux/network/members
[stars-shield]: https://img.shields.io/github/stars/Dandush03/Rails-Devise-React-Redux.svg?style=flat-square
[stars-url]: https://github.com/Dandush03/Rails-Devise-React-Redux/stargazers
[issues-shield]: https://img.shields.io/github/issues/Dandush03/Rails-Devise-React-Redux.svg?style=flat-square
[issues-url]: https://github.com/Dandush03/Rails-Devise-React-Redux/issues
[license-shield]: https://img.shields.io/github/license/Dandush03/Rails-Devise-React-Redux.svg?style=flat-square
[license-url]: https://github.com/Dandush03/Rails-Devise-React-Redux/blob/master/LICENSE.txt
[linkedin-shield2]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url2]: https://www.linkedin.com/in/daniel-laloush/
[hireable]: https://cdn.rawgit.com/hiendv/hireable/master/styles/flat/yes.svg
[hireable-url]: https://www.linkedin.com/in/daniel-laloush/