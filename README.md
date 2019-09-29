# @theodcr/jupyterlab-gruvbox

Gruvbox theme for JupyterLab

Made with [JupyterLab theme cookiecutter](https://github.com/jupyterlab/theme-cookiecutter). Spacing and arrangement inspired from [Atom Dark Theme for JupyterLab](https://github.com/BurglarBenson/Jupyter-Atom-Dark-Theme).

This repo also contains a Gruvbox theme for Matplotlib. To use it, copy `gruvbox.mplstyle` to `~/.config/matplotlib/stylelib/` and tell Matplotlib to load it:

```python
import matplotlib.pyplot as plt
plt.style.use("gruvbox")
```

## Prerequisites

* JupyterLab >=1.0

## Installation

```bash
jupyter labextension install @theodcr/jupyterlab-gruvbox
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
