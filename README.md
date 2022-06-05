<div  id="top"></div>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]

[![Forks][forks-shield]][forks-url]

[![Stargazers][stars-shield]][stars-url]

[![Issues][issues-shield]][issues-url]

[![MIT License][license-shield]][license-url]

[![Current Version][version-shield]][version-url]

<!-- PROJECT LOGO -->

<br />

<div align="center">

<a  href="https://github.com/ahmed-imraan-ai/Vue-Curseur">

<img  src="images/logo.png"  alt="Vue-Curseur"  width="166"  height="132">

</a>

<h3 align="center">Vue-Curseur</h3>

<p align="center">

Light, extendable and reactive Slider for Vue 3

<br />

<a  href="https://github.com/ahmed-imraan-ai/Vue-Curseur"><strong>Explore the docs »</strong></a>

<br />

<br />

<a  href="https://github.com/ahmed-imraan-ai/Vue-Curseur">View Demo</a>

·

<a  href="https://github.com/ahmed-imraan-ai/Vue-Curseur/issues">Report Bug</a>

·

<a  href="https://github.com/ahmed-imraan-ai/Vue-Curseur/issues">Request Feature</a>

</p>

</div>

<!-- TABLE OF CONTENTS -->

<details>

<summary>Table of Contents</summary>

<ol>

<li>

<a  href="#about-the-project">About The Project</a>

<ul>

<li><a  href="#built-with">Built With</a></li>

</ul>

</li>

<li>

<a  href="#getting-started">Getting Started</a>

<ul>

<li><a  href="#prerequisites">Prerequisites</a></li>

<li><a  href="#installation">Installation</a></li>

</ul>

</li>

<li><a  href="#usage">Usage</a></li>

<li><a  href="#roadmap">Roadmap</a></li>

<li><a  href="#contributing">Contributing</a></li>

<li><a  href="#license">License</a></li>

<li><a  href="#contact">Contact</a></li>

<li><a  href="#acknowledgments">Acknowledgments</a></li>

</ol>

</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Vue-Curseur Example][product-screenshot]](https://profile.sudo520.com)

TBA

<p align="right">(<a  href="#top">back to top</a>)</p>

### Built With

-   [Vue.js](https://vuejs.org/)

<p align="right">(<a  href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

-   Vue 3

```sh
# for npm:
npm install vue@latest

# for yarn:
yarn add vue@latest
```

### Installation

```sh
# for npm:
npm install vue-curseur

# for yarn:
yarn add vue-curseur
```

<p align="right">(<a  href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

**Standalone Component Example**

```js
//main.js or MyComponent.vue
import "vue-curseur/dist/style.css";
```

```html
//MyComponent.vue
<script setup>
	import { VueCurseur, CurseurSlide } from "vue-curseur";
	const slides = [
		{ img: "https://picsum.photos/id/237/1800/500", alt: "Dog Image" },
		{ img: "https://picsum.photos/id/811/1800/500", alt: "Forest Image" },
		{ img: "https://picsum.photos/id/892/1800/500", alt: "Plymouth Image" },
		{ img: "https://picsum.photos/id/1002/1800/500", alt: "Random Image" },
		{ img: "https://picsum.photos/id/316/1800/500", alt: "Bridge Image" },
		{ img: "https://picsum.photos/id/757/1800/500", alt: "Car Image" },
	];
</script>

<template>
	<VueCurseur
		:autoPlay="true"
		:transitionSpeed="300"
		:autoPlaySpeed="5000"
		effect="grow"
	>
		<CurseurSlide v-for="(s, i) in slides" :key="i">
			<div>
				<img class="image" :src="s.img" :alt="s.alt" />
			</div>
		</CurseurSlide>
	</VueCurseur>
</template>
```

**Plugin Example**

```js
//main js
import App from "./App.vue";
import "vue-curseur/dist/style.css";
import VueCurseurPlugin from "vue-curseur";

createApp(App).use(VueCurseurPlugin).mount("#app");
```

```html
//SliderComponent.vue
<script setup>
	const slides = [
		{ img: "https://picsum.photos/id/237/1800/500", alt: "Dog Image" },
		{ img: "https://picsum.photos/id/811/1800/500", alt: "Forest Image" },
		{ img: "https://picsum.photos/id/892/1800/500", alt: "Plymouth Image" },
		{ img: "https://picsum.photos/id/1002/1800/500", alt: "Random Image" },
		{ img: "https://picsum.photos/id/316/1800/500", alt: "Bridge Image" },
		{ img: "https://picsum.photos/id/757/1800/500", alt: "Car Image" },
	];
</script>

<template>
	<vue-curseur
		:autoPlay="true"
		:transitionSpeed="300"
		:autoPlaySpeed="5000"
		effect="grow"
	>
		<curseur-slide v-for="(s, i) in slides" :key="i">
			<div>
				<img class="image" :src="s.img" :alt="s.alt" />
			</div>
		</curseur-slide>
	</vue-curseur>
</template>
```

<p align="right">(<a  href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [x] Add Reactive slides

-   [x] Add Navigation

-   [x] Add Pagination

-   [ ] Add Changelog

-   [ ] Add Templating

-   [ ] Add Additional Templates w/ Examples

-   [ ] Add code examples to readme

-   [ ] Multi-language Support

    -   [ ] Dhivehi

    -   [ ] TBA

-   [ ] TBA

See the [open issues](https://github.com/ahmed-imraan-ai/Vue-Curseur/issues) for a full list of proposed features (and known issues).

<p align="right">(<a  href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

<p align="right">(<a  href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` file for more information.

<p align="right">(<a  href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@Ahmed\_\_Imraan](https://twitter.com/Ahmed__Imraan) - ahmed.imraan.ai@live.com

Project Link: [https://github.com/ahmed-imraan-ai/Vue-Curseur](https://github.com/ahmed-imraan-ai/Vue-Curseur)

<p align="right">(<a  href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

-   [Choose an Open Source License](https://choosealicense.com)

-   [Img Shields](https://shields.io)

-   [Material Icons](https://mui.com/material-ui/material-icons/)

<p align="right">(<a  href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/ahmed-imraan-ai/Vue-Curseur?style=for-the-badge
[contributors-url]: https://github.com/ahmed-imraan-ai/Vue-Curseur/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ahmed-imraan-ai/Vue-Curseur?style=for-the-badge
[forks-url]: https://github.com/ahmed-imraan-ai/Vue-Curseur/network/members
[stars-shield]: https://img.shields.io/github/stars/ahmed-imraan-ai/Vue-Curseur?style=for-the-badge
[stars-url]: https://github.com/ahmed-imraan-ai/Vue-Curseur/stargazers
[issues-shield]: https://img.shields.io/github/issues/ahmed-imraan-ai/Vue-Curseur?style=for-the-badge
[issues-url]: https://github.com/ahmed-imraan-ai/Vue-Curseur/issues
[license-shield]: https://img.shields.io/github/license/ahmed-imraan-ai/Vue-Curseur?style=for-the-badge
[license-url]: https://github.com/ahmed-imraan-ai/Vue-Curseur/blob/main/LICENSE
[version-shield]: https://img.shields.io/npm/v/vue-curseur?label=Current%20Version&style=for-the-badge
[version-url]: https://www.npmjs.com/package/vue-curseur
[product-screenshot]: images/screenshot06012022.png
