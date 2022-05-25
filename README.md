# Deep

A local server to aid Universal Link testing on iOS. 

## Requirements

1. A `node` and `yarn` installation, or `nix`
2. A free [`ngrok`](https://ngrok.io) account

## Running

1. Add/update `.well-known/apple-app-site-association` (see https://developer.apple.com/documentation/bundleresources/applinks)
2. List the relevant links for testing in `index.html`
3. Run the server

Using raw `node` and `yarn`:
```shell
$ yarn # install dependencies
$ ./run_server
```
Using `nix`:
```shell
$ ./nix_run_server
```
4. Add the generated `ngrok` domain to `applinks` in Xcode
5. Run the app on the simulator
6. Open the links index on the currently booted simulator
```shell
$ ./open_on_simulator <ngrok_url>
```
