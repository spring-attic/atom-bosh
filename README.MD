# Concourse CI YAML Editor for Atom
[![macOS Build Status](https://travis-ci.org/spring-projects/atom-bosh.svg?branch=master)](https://travis-ci.org/spring-projects/atom-bosh) [![Windows Build Status](https://ci.appveyor.com/api/projects/status/1jvknxt9jhykgrxo?svg=true)](https://ci.appveyor.com/project/spring-projects/atom-bosh/branch/master) [![Dependency Status](https://david-dm.org/spring-projects/atom-bosh.svg)](https://david-dm.org/spring-projects/atom-bosh)

This extension provides basic validation, content assist and hover infos
for editing Bosh [Deployment Manifest](https://bosh.io/docs/deployment-manifest.html) and [Cloud Config](https://bosh.io/docs/cloud-config.html) Files.

It is recommended to use this extension package when `atom-ide-ui` atom extension package is installed. Thus, reconciling (error/warning markers) and hover support is fully functional. 

## Usage

The Bosh editor automatically activates when the name of the file you are editing is `deployment.yml`, or editor grammar is set to `Bosh-Deployment-Manifest`, or the file is `cloud-config.yml`, or editor grammar is set to `Bosh-Cloud-Config`.

## Functionality

### Validation

(Requires `atom-ide-ui` package) As you type the manifest is parsed and checked for basic syntactic and structural correctness. Hover over
an error marker to see an explanation.

![Linting Screenshot][linting]

### Content Assist

Having trouble remembering all the names of the attributes, and their spelling? Content assist to the
rescue:

![Content Assist Screenshot][ca]

### Documentation Hovers

(Requires `atom-ide-ui` package) Having trouble remembering exactly what the meaning of each attribute is? Hover over any attribute and 
read its detailed documentation.

![Hover Docs Screenshot][hovers]

## Dev environment setup:
**Prerequisite**: Node 6.x.x or higher is installed, Atom 1.17 or higher is installed
1. Clone the repository
2. Run `npm install`
3. Execute `apm link .` from the folder above
5. Perform `Reload Window` in Atom (Cmd-Shift-P opens commands palette, search for `reaload`, select, press `Return`)
6. Open any `deployment.yml` or `cloud-config.yml` file in Atom observe reconciling, content assist and other IDE features

[linting]: https://raw.githubusercontent.com/spring-projects/atom-cf-manifest-yaml/3e485d98ca1f5fb5ca3d780ffd85cd8e4e9e96be/readme-imgs/linting.png


