# Built from: Accessible Astro Starter

A ready-to-use, SEO and accessibility-focused Astro starter template. Built with modern web standards and WCAG guidelines in mind, it provides a solid foundation for creating inclusive websites. Features Tailwind CSS integration, comprehensive component library, and example pages including a dynamic blog, 404, and MDX support.

[![LIVE DEMO](https://img.shields.io/badge/LIVE_DEMO-4ECCA3?style=for-the-badge&logo=astro&logoColor=black)](https://accessible-astro-starter.incluud.dev/) &nbsp;
[![DOCUMENTATION](https://img.shields.io/badge/DOCUMENTATION-A682FF?style=for-the-badge&logo=astro&logoColor=black)](https://accessible-astro.incluud.dev/) &nbsp;


## Getting started

Clone this theme locally and run any of the following commands in your terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## MMF Notes re: VS Code Setup

Add VS Code extensions:
- Astro
- MDX
- Prettier
- Tailwind CSS IntelliSense
- ESLint
- Markdown Preview Enhanced
- JavaScript and TypeScript: not needed as VS Code has this built-in

Also add from the terminal:
``` bash
npm install prettier_plugin_tailwindcss
npm install @astrojs/cloudflare
```

## MMF Reminders re: git

### Initialize new repos to use main (not master)

`git config --global init.defaultBranch main`

### Working on a new branch
To see what branches are available locally:

``` bash
git branch
```

Update your local main branch.
``` bash
git checkout main
git pull origin main
```

To create a new branch locally:
``` bash
git checkout -b branchname01
```

Add files and commit as you move along with VS Code or at the command line.
- add files, commit, push
``` bash
git add . // adds all files
git commit -m "Your commit message here"
```

Push to GitHub periodically and when done working on the branch.
``` bash
git push -u origin branchname01 // if the branch does not exist on GitHub (-u is the short for --set-upstream)
```
or
``` bash
git push origin branchname01 // if the branch exists on GitHub
```
  
- PR, merge to main.
- Delete branch on GitHub at the end of the Merge sequence. If you forget, you can delete from GitHub's branch view or a terminal command.
``` bash
git push origin --delete branchname01
```

- Delete local branch:
``` bash
git checkout main // you can't delete a branch that's checked out
git branch -d branchname01
```

### Merging changes from main to my feature branch

Make sure your local main is up-to-date.

```bash
git checkout main
git pull origin main
```

Then, create a new branch.

``` bash
git checkout -b branchname02
```
Now, merge main into your branch.

``` bash
git merge main
```

### Show git location (quick hack)

From [Medium and other places:](https://thucnc.medium.com/how-to-show-current-git-branch-with-colors-in-bash-prompt-380d05a24745)

Add this to `~/.bashrc`:
``` text
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
export PS1="\u@\h \[\e[32m\]\w \[\e[91m\]\$(parse_git_branch)\[\e[00m\]$ "
```

Then source it:
``` bash
source ~/.bashrc
```
### Deploy to GitHub Pages
Haven't tried yet. [Deploy your Astro Site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github)
