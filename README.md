# DOCCA documentation

Documentation source for [DOCCA](https://docca.work), built with Mintlify.
Project updates: [@doccalabs](https://x.com/doccalabs).

## Validate configuration

With Node.js 22 or newer, run:

```bash
npm test
```

No dependency installation is needed. The tests check the current website and
social links, navigation page files, and configured logo/favicon assets.
They do not compile MDX or check external website availability.

## Edit and preview

- `docs.json` controls navigation, branding, and project links.
- Root-level `.mdx` files contain documentation pages.
- `logo/`, `images/`, and `favicon.svg` contain local assets.

See the [Mintlify local preview guide](https://www.mintlify.com/docs/installation)
for CLI setup. Run the preview from this directory, where `docs.json` lives.
After editing, run `npm test` and review the rendered pages before publishing.

## Publishing

If this repository is connected to a Mintlify project, its configured deployment
branch controls publication. Confirm the integration and branch in that project's
dashboard rather than assuming every push deploys the docs.
