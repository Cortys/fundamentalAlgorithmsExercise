# Johnson Path Finder

An implementation of Johnsons All Pairs Shortest Path algorithm.

## Simple installation

Node.js >= 4 has to be installed. Simply execute the following in a terminal: `npm i -g @cortys/johnson-path-finder`

After that you should have a `johnson` executable on your `$PATH`.

## Build it yourself

This only works on Linux/Unix systems. Node.js >= 4 and git has to be installed. To build the program yourself execute the following in a terminal:

```sh
git clone https://github.com/Cortys/fundamentalAlgorithmsExercise.git
cd fundamentalAlgorithmsExercise
npm install
```
Afterwards you should find an executable in `build/johnson`.

## Usage

The executable expects a relative path to a file containing the graph that should be fed into the algorithm. Example graphs can be found in `test/data` in this repository.

### Example

```sh
./build/johnson test/data/small2.txt

# Expected output:
delta 0 : 0w0 1w5 2w4 3w3 4w2
delta 1 : 1w0 2w-1 3w-2
delta 2 : 2w0 3w-1
delta 3 : 3w0
delta 4 : 3w2 4w0
```
