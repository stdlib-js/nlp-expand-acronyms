<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Expand Acronyms

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Expand acronyms.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import expandAcronyms from 'https://cdn.jsdelivr.net/gh/stdlib-js/nlp-expand-acronyms@esm/index.mjs';
```

#### expandAcronyms( str )

Expands acronyms in a string.

```javascript
var str = 'TLDR, the article is too long...';
var out = expandAcronyms( str );
// returns 'too long did not read, the article is too long...'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This expansion is done via a simple table look-up. Hence, it is not able to replace acronyms for which there are multiple possible expansions.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import expandAcronyms from 'https://cdn.jsdelivr.net/gh/stdlib-js/nlp-expand-acronyms@esm/index.mjs';

var str = 'LOL, this is fun. I am ROFL.';
var out = expandAcronyms( str );
// returns 'laughing out loud, this is fun. I am rolling on the floor laughing.'

str = 'brb, I need to check my mail. thx!';
out = expandAcronyms( str );
// returns 'be right back, I need to check my mail. thanks!'

str = 'OTOH, there are some drawbacks to this approach imho.';
out = expandAcronyms( str );
// returns 'on the other hand, there are some drawbacks to this approach in my humble opinion.'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/nlp-expand-contractions`][@stdlib/nlp/expand-contractions]</span><span class="delimiter">: </span><span class="description">expand contractions.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/nlp-expand-acronyms.svg
[npm-url]: https://npmjs.org/package/@stdlib/nlp-expand-acronyms

[test-image]: https://github.com/stdlib-js/nlp-expand-acronyms/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/nlp-expand-acronyms/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/nlp-expand-acronyms/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/nlp-expand-acronyms?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/nlp-expand-acronyms.svg
[dependencies-url]: https://david-dm.org/stdlib-js/nlp-expand-acronyms/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/nlp-expand-acronyms/tree/deno
[deno-readme]: https://github.com/stdlib-js/nlp-expand-acronyms/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/nlp-expand-acronyms/tree/umd
[umd-readme]: https://github.com/stdlib-js/nlp-expand-acronyms/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/nlp-expand-acronyms/tree/esm
[esm-readme]: https://github.com/stdlib-js/nlp-expand-acronyms/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/nlp-expand-acronyms/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/nlp-expand-acronyms/main/LICENSE

<!-- <related-links> -->

[@stdlib/nlp/expand-contractions]: https://github.com/stdlib-js/nlp-expand-contractions/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
