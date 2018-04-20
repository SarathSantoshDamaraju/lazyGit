[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://doge.mit-license.org/)
# lazyGit
Tired of typing lengthy git commands? Well, if you are amongst who feel like me this repo is a saviour for you. This repo includes short hand commands for the regular git commands which you can type in jiffy. 
> I'd advice beginners to learn git commands first hand before using any shortcodes or aliases

## Installation
1. Clone or Download the repo.
2. Open terminal and navigae to the repo location.
3. Run `./_install` to install, make sure you have permissions to execute the script. If not **run this command first** `chmod 755 _install` and run `./_install` again.

## Short Codes List
| Command | Shortcode | Can pass default params with this command | Git Repo Link |
| --- | --- | --- | --- |
| `git init [<options>]` | `g! [<options>]` | Yes | [->](https://git-scm.com/docs/git-init) |
| `git add .` | `g.` | Yes | [->](https://git-scm.com/docs/git-add) |
| `git branch` | `gb` | Yes | [->](https://git-scm.com/docs/git-branch) |
| `git checkout -b <name>` | `gb-new <name>` | No, You can only pass branch-name and `--track` or `--no-track`| [->](https://git-scm.com/docs/git-checkout) |
| `git blame` | `gblame` | Yes | [->](https://git-scm.com/docs/git-blame) |
| `git clone <url> ` | `gclone <url>` | Yes |[->](https://git-scm.com/docs/git-clone) |
| `git commit -m <message>` | `gc <message>` | No, it accepts only commit message |[->](https://git-scm.com/docs/git-commit) |
| `git diff [--options] <commit> [--] [<path>…]` | Yes | `gd [--options] <commit> [--] [<path>…]` | [->](https://git-scm.com/docs/git-diff) |
| `git fetch [<options>] [<repository> [<refspec>…]` | `gf [<options>] [<repository> [<refspec>…]]` | Yes | [->](https://git-scm.com/docs/git-fetch) |
| `git push [<options>] [<remote>] [<branch>]` | `gpush [<options>] [<remote>] [<branch>]` | Yes | [->](https://git-scm.com/docs/git-push) |
| `git push -f [<remote>] [<branch>]`| `gpush-f <remote> <branch>`| Yes | [->](https://git-scm.com/docs/git-push) |
| `git pull [options] [<repository> [<refspec>…]]` | `gpull [options] [<repository> [<refspec>…]]` | Yes | [->](https://git-scm.com/docs/git-pull) |
| `git remote [commands] [<...>]` | `gr [commands] [<...>]` | Yes | [->](https://git-scm.com/docs/git-remote) |
| `git remote -v` | `gr-v` | It acceps only `<show>` and `<update>` | [->](https://git-scm.com/docs/git-remote) |
| `git remote add  <name> <url>` | `gr-update <name> <url>` | It accepts options related to `<add>` | [->](https://git-scm.com/docs/git-remote#git-remote-emaddem) |
| `git remote update` | `gr-update` | Only accepts `<prune>` | [->](https://git-scm.com/docs/git-remote#git-remote-emupdateem) |
| `git remote remove <name>`| `gr-remove <name>`| No other options are needed other than `<name>` | [->](https://git-scm.com/docs/git-remote#git-remote-emremoveem) |
| `git reset [<mode>] <head>`| `greset  [<mode>] <head>`| Yes | [->](https://git-scm.com/docs/git-reset) |
| `git reset --hard <head>`| `greset-h <head>`| Takes only `<head>` | [->](https://git-scm.com/docs/git-reset#git-reset---hard) |
| `git revert [<options>] [<subcommands>]`| `grevert [<options>] [<subcommands>]`| Yes | [->](https://git-scm.com/docs/git-revert) |
| `git revert HEAD`| `grevert-h`| This reverts last commit only, Use the above for reseting other commits eg., `grevert head~2`| [->](https://git-scm.com/docs/git-revert) |
| `git status [<options>…] [--] [<pathspec>…]`| `gs [<options>…] [--] [<pathspec>…]`| Yes | [:information_source:](https://git-scm.com/docs/git-status) |

----
## To Contribute

I have added commands that I use frequently and will update update occassionally, feel free to add any otehr commands and raise a PR. 

----

## Tasks
- [x]  ~~Add Bash file with basic commands~~
- [ ] Add Install via pip
- [ ] Add Insatll via npm

---
#### Fell free to suggest and report, Raise a PR with [report] or [suggest] labels

