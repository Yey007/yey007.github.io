---
title: TranscriberBot
link: https://github.com/Yey007/TranscriberBot
order: 3
---

TranscriberBot is a Discord bot written in TypeScript that uses the
IBM Watson Speech-to-Text API to provide live transcription of voice
channels. My biggest learning from this project wasn't really how to
use Discord.js or Watson, but rather how to set up CI/CD. I built a
full pipeline using GitHub Actions and Docker deploying to my old
laptop. It can even run integration tests by launching another bot
and testing that interactions work correctly.
