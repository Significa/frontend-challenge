# whats-in

![Badge](https://img.shields.io/badge/Whats%20in-Keep%20%20track%20of%20your%20movies-%237159c1?style=for-the-badge&logo=ghost)

# Content Table

<!--ts-->

- [About](#about)
- [Requirements](#requirements)
<!--te-->

<h4 align="center"> 
	▶️ What's in API
</h4>

### About

▶️ What's in API acts as a proxy so our API key doesn't get exposed to the world! It can also be used to rate-limit so our API doesn't get abused by third-party

Q: Why not just hide the API key on an .env file on the frontend?

A: If we do this, tech-savvy users may still get our API key through the network tab, which is not ideal. There is also no way for us to know if it's getting abused, and this might potentially take down our app due to the OMDB API rate limiting. Having a proxy server also allows us to do rate limiting ourselves.

### Requirements

Before you start, you'll need the following tools installed:
[Git](https://git-scm.com),
[Node.js](https://nodejs.org/en/),
[VSCode](https://code.visualstudio.com/).

### 🎲 Running this project locally

```bash
# Clone this repo
$ git clone https://github.com/hanar3/frontend-challenge


# Install the dependencies
$ npm install

# Set up .env
$ cp .env.example .env

# Run the application in development mode
$ npm run dev

# The server will start running on port 3333>
```
