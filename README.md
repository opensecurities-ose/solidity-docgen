# Generate API docs for solidity contract

## Requirements

* Nodejs
* docker
* solc
* docsify

## How to use

1. Install docker

2. Pull solidity image

```bash
docker pull ethereum/solc:0.4.24
```

3. Install npm modules

```bash
    npm install
```

4. Link the command `solidoc`

```bash
npm link
```

5. Generate docs

the files will output in ./docs 

```bash
solidoc ${contract_path}
```

> To show the files in web browser ,add the [docsify](https://github.com/docsifyjs/docsify) sources needed
