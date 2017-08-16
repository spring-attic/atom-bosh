# Concourse CI YAML Editor for Atom
[![macOS Build Status](https://travis-ci.org/spring-projects/atom-bosh.svg?branch=master)](https://travis-ci.org/spring-projects/atom-bosh) [![Windows Build Status](https://ci.appveyor.com/api/projects/status/1jvknxt9jhykgrxo?svg=true)](https://ci.appveyor.com/project/spring-projects/atom-bosh/branch/master) [![Dependency Status](https://david-dm.org/spring-projects/atom-bosh.svg)](https://david-dm.org/spring-projects/atom-bosh)

This extension provides basic validation, content assist and hover infos
for editing Bosh [Deployment Manifest](https://bosh.io/docs/deployment-manifest.html) and [Cloud Config](https://bosh.io/docs/cloud-config.html) Files.

It is recommended to use this extension package when `atom-ide-ui` atom extension package is installed. Thus, reconciling (error/warning markers) and hover support is fully functional. 

## Usage

The Bosh editor automatically activates when the name of the file you are editing is `deployment.yml`, or editor grammar is set to `Bosh-Deployment-Manifest`, or the file is `cloud-config.yml`, or editor grammar is set to `Bosh-Cloud-Config`.

## Functionality

This extension provides validation, content assist and documentation hovers
for editing [Bosh](https://bosh.io/) Deployment Manifest files and
Cloud Configs.

### Validation

As you type the text is parsed and checked for basic syntactic and structural correctness. Hover over
an error marker to see an explanation:

![Linting Screenshot][linting]

### Content assist

Having trouble remembering all the names of the attributes, and their spelling? Or can't remember
the exact name/version of the stemcell you just uploaded to your bosh environment? Content assist
to the rescue:

![Content Assist Screenshot][ca1]

![Content Assist Screenshot][ca2]

### Documentation Hovers

Having trouble remembering exactly what the meaning of each attribute is? Hover over an attribute and
read its detailed documentation:

![Hover Docs Screenshot][hovers]

### Navigate to Symbol in File

Is your deployment manifest file getting larger and it is becoming harder to find a particular Instance Group, Release, or Stemcell definition? The Atom Outline View (View -> Toggle Outline View) helps you quickly jump to a specific definition.

![Outline View][outline_view]

### V2 versus V1 Schema

The editor is intended primarily to support editing manifests in the [V2 schema](https://bosh.io/docs/manifest-v2.html).
When you use attributes from the V1 schema the editor will detect this however and switch to 'V1 tolerance' mode.

In this mode, V1 properties are accepted but marked with deprecation warnings and V2 properties are marked as (unknown property)
errors.

### Targetting a specific Director

Some of the Validations and Content Assist depend on information dymanically retrieved from an active Bosh director.
The editor retreives information by executing commands using the Bosh CLI. For this to work the CLI (V2
CLI is required) and editor have to be installed and configured correctly.

There are two ways to set things up to make this work:

#### Explicitly Configure the CLI:

From Atom, press `CTRL-SHIFT-P` and type `config`. Then enter or edit:

```
  "bosh-yaml":
    bosh:
      cli:
        command: "bosh"
        target: mytarget
        timeout: 3
```
The bosh cli is configured by specifying keys of the form `bosh.cli.XXX`. Content assist and hover docs show you the
available keys and their meaning.

Note that the `bosh.cli.XXX` settings do not allow you to provide credentials to connect to the director.
The editor assumes that you are providing the credentials implicitly by using the `bosh login` command from a terminal.
The bosh cli will persist the credentials in `~/.bosh/config` and read them from there. A typical sequence of commands to store the credentials would be something like the following:

First, create an alias for your environment:

```
$ bosh alias-env my-env -e 10.194.4.35 --ca-cert <(bosh int ./creds.yml --path /director_ssl/ca)
Using environment '10.194.4.35' as anonymous user
...
Succeeded
$
```

Second, obtain username/password for your director. For example:

```
$ bosh int ./creds.yml --path /admin_password
very-secret-admin-password

Succeeded
```

Now use `bosh login` to establish a session and store the credentials:

```
$ bosh login -e my-env
Username (): admin
Password (): very-secret-admin-password

Using environment '10.194.4.35' as client 'admin'

Logged in to '10.194.4.35'

Succeeded
```

You can verify that CLI is setup correctly by executing a command like:

```
$ bosh -e my-env cloud-config
...
Succeeded
```

#### Implictly Configure the CLI:

If the bosh cli is not explicitly configured, the editor will, by default, try to execute commands like `bosh cloud-config --json`
and `bosh stemcells --json` without an explicit `-e ...` argument. This works only if you ensure that the editor
process executes with a proper set of OS environment variables:

- `PATH`: must be set so that `bosh` cli executable can be found and refers to the V2 CLI.
- `BOSH_ENVIRONMENT`: must be set to point to the bosh director you want to target.

If you start Atom from a terminal, you can verify that things are setup correctly by executing command:

     bosh cloud-config

If that command executes without any errors and returns the cloud-config you expected, then things are setup correctly.
If you subsequently launch Atom from that same terminal the dynamic CA and linting should work correctly.

## Dev environment setup:
**Prerequisite**: Node 6.x.x or higher is installed, Atom 1.17 or higher is installed
1. Clone the repository
2. Run `npm install`
3. Execute `apm link .` from the folder above
5. Perform `Reload Window` in Atom (Cmd-Shift-P opens commands palette, search for `reload`, select, press `Return`)
6. Open any `pipeline.yml` or `task.yml` file in Atom observe reconciling, content assist and other IDE features


