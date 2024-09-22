# WIP

WIP

## Dependencies

Just `node`. It's useful to have `python` too if you want to serve the file on localhost but the project is so simple that just opening [index.html] on a web browser should work.

## Developing

Run the following script to build:

```sh
npm run build
```

You can't run the app without building first. It will create a `/build` directory with some files `index.html` is sourcing directly. It is building for `tailwindcss` right now, so if you change any `.css` file or the `tailwindcss` classes used, you should rebuild to update and see the changes.

Having built, you now need to setup your `.env` file:

```sh
cp .env.template .env
```

This sets an environment variable for the port it will be served after you run:

```sh
npm run dev
```

As said previously, you need `python` to run this command and technically you don't need it, you can just open [index.html] directly after having built, don't even need the `.env` file but it's easier with that command.

By default, it runs on port 3000 but you're free to change it on your `.env` file.

Other than that, you have the following scripts for linting and formatting:

```sh
npm run lint
npm run format
```
