[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0f733ac7b7ca40e79cfed0c8396c7001)](https://app.codacy.com/app/krishna.damaraju/lazyGit?utm_source=github.com&utm_medium=referral&utm_content=SarathSantoshDamaraju/lazyGit&utm_campaign=Badge_Grade_Dashboard)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://doge.mit-license.org/)

# 🅛🅐🅩🅨🅖🅘🅣 🤟

Tired of typing lengthy git commands? Well, if you are amongst who feel like me, this repo is a savior for you. This repo includes shorthand commands for the regular git commands which you can type in a jiffy.

```diff
- I'd advice beginners to learn git commands first hand before using any shortcodes or aliases
```

## Installation

1. Clone or Download the repo.
2. Run `./_install` to install
3. If you see any permissions related errors try ➡️`chmod 755 _install` and run `./_install` again. or any error please raise a PR 😅

## Short Codes List

| Command                                            | Shortcode                                    | Can pass default params with this command ?                                                   | Git Repo Link                                                                                       |
| -------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `git init [<options>]`                             | `g! [<options>]`                             | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-init)                                           |
| `git add .`                                        | `g.`                                         | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-add)                                            |
| `git branch`                                       | `gb`                                         | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-branch)                                         |
| `git branch -a`                                    | `gb-a`                                       | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-branch)                                         |
| `git branch -d`                                    | `gb-d`                                       | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-branch)                                         |
| `git branch -m <name>`                             | `gb-name <name>`                             | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-branch)                                         |
| `git checkout -b <name>`                           | `gb-new <name>`                              | No, You can only pass branch-name and `--track` or `--no-track`                               | [:information_source:](https://git-scm.com/docs/git-checkout)                                       |
| `git checkout -- .`                                | `g!.`                                        | No, Discards all your changes                                                                 | [:information_source:](https://git-scm.com/docs/git-checkout)                                       |
| `git blame`                                        | `gblame`                                     | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-blame)                                          |
| `git clone <url>`                                  | `gcl <url>`                                  | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-clone)                                          |
| `git commit -m <message>`                          | `gc <message>`                               | No, it accepts only commit message                                                            | [:information_source:](https://git-scm.com/docs/git-commit)                                         |
| `git diff [--options] <commit> [--] [<path>…]`     | `gd [--options] <commit> [--] [<path>…]`     | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-diff)                                           |
| `git fetch [<options>] [<repository> [<refspec>…]` | `gf [<options>] [<repository> [<refspec>…]]` | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-fetch)                                          |
| `git log --graph --decorate --all`                 | `gl`                                         | No                                                                                            | [:information_source:](https://git-scm.com/docs/git-log)                                            |
| `git log --summary`                                | `gl-s`                                       | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-log)                                            |
| `git push [<options>] [<remote>] [<branch>]`       | `gph [<options>] [<remote>] [<branch>]`      | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-push)                                           |
| `git push -f [<remote>] [<branch>]`                | `gph-f <remote> <branch>`                    | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-push)                                           |
| `git pull [options] [<repository> [<refspec>…]]`   | `gpl [options] [<repository> [<refspec>…]]`  | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-pull)                                           |
| `git remote [commands] [<...>]`                    | `gr [commands] [<...>]`                      | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-remote)                                         |
| `git remote -v`                                    | `gr-v`                                       | It acceps only `<show>` and `<update>`                                                        | [:information_source:](https://git-scm.com/docs/git-remote)                                         |
| `git remote add <name> <url>`                      | `gr-update <name> <url>`                     | It accepts options related to `<add>`                                                         | [:information_source:](https://git-scm.com/docs/git-remote#git-remote-emaddem)                      |
| `git remote update`                                | `gr-update`                                  | Only accepts `<prune>`                                                                        | [:information_source:](https://git-scm.com/docs/git-remote#git-remote-emupdateem)                   |
| `git remote remove <name>`                         | `gr-remove <name>`                           | No other options are needed other than `<name>`                                               | [:information_source:](https://git-scm.com/docs/git-remote#git-remote-emremoveem)                   |
| `git reset [<mode>] <head>`                        | `greset [<mode>] <head>`                     | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-reset)                                          |
| `git reset --hard <head>`                          | `greset-h <head>`                            | Takes only `<head>`                                                                           | [:information_source:](https://git-scm.com/docs/git-reset#git-reset---hard)                         |
| `git revert [<options>] [<subcommands>]`           | `grevert [<options>] [<subcommands>]`        | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-revert)                                         |
| `git revert HEAD`                                  | `grevert-h`                                  | This reverts last commit only, Use the above for reseting other commits eg., `grevert head~2` | [:information_source:](https://git-scm.com/docs/git-revert)                                         |
| `git status [<options>…] [--] [<pathspec>…]`       | `gs [<options>…] [--] [<pathspec>…]`         | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-status)                                         |
| `git stash [<command>] [<options>]`                | `gsh [<command>] [<options>]`                | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-stash)                                          |
| `git stash apply [--index] [<stash>]`              | `gsh-a [--index] [<stash>]`                  | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-stash)                                          |
| `git stash list [<options>]`                       | `gsh-l [<options>]`                          | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-stash#git-stash-listltoptionsgt)                |
| `git stash clear`                                  | `gsh-c`                                      | No It clears all the stash list                                                               | [:information_source:](https://git-scm.com/docs/git-stash#git-stash-clear)                          |
| `git stash pop [--index]`                          | `gsh-p [--index]`                            | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-stash#git-stash-pop--index-q--quietltstashgt)   |
| `git stash drop [<stash>]`                         | `gsh-d [<stash>]`                            | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-stash#git-stash-apply--index-q--quietltstashgt) |
| `git tag -l --sort=v:refname \| tail -n8`          | `gt`                                         | No                                                                                            | [:information_source:](https://git-scm.com/docs/git-tag)                                            |
| `git add . && git commit -m`                       | `g.c <message>`                              | No, it accepts only commit message                                                            | [:information_source:](https://git-scm.com/docs/git-commit)                                         |
| `git rebase [< All options>]`                      | `grb [<All options>]`                        | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-rebase)                                         |
| `git show [<options>] [<object>]`                  | `gsw [<options>] [<object>]`                 | Yes                                                                                           | [:information_source:](https://git-scm.com/docs/git-show)                                           |
| `git push <remote> <current-branch>`               | `gph-this <remote>`                           | No                                                                                           | Utility Function to push the current branch                                                           |
| `git pull <remote> <current-branch>`               | `gpl-this <remote>`                           | No                                                                                           | Utility Function to pull the current branch                                                           |
---

## To Contribute

I have added commands that I use frequently and scope for new commands (Bash Aliases) is less. But if you are interested you can raise a PR or please follow [this branch](https://github.com/SarathSantoshDamaraju/lazyGit/tree/npm)

---

## Tasks

- [x] ~~Add Bash file with basic commands~~
- [ ] Add Install via npm [WIP](https://github.com/SarathSantoshDamaraju/lazyGit/tree/npm)
- [ ] ~~Add Install via pip~~ (If interested, work and raise a PR)

---

#### Fell free to suggest and report, Raise a PR with [report] or [suggest] labels
