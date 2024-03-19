Qencode assignment for frontend developer position.

Notes:
- Node.js v20 is required to run the application
- To access password reset page it is required to manually pass ?token=some_token&secret=some_secret to the /login/reset page because credentials were not provided to properly test api integration
- There are 3 different error details returned from API which makes it difficult to process all of them. For failed api requests I've used dummy error strings like "Invalid email or password", "Email not found", "Invalid token or secret".

**Technologies used:**
- React
- MobX
- Typescript
- Webpack
- Axios
- CSS Modules
- Eslint
- Prettier

Project Structure
```
├── src
│   ├── core-module - module which bootstrap all other modules
│   ├── shared-module - module which contains shared components, services, etc.
│   ├── auth-module - module which contains authentication logic
│   ├── fonts - application fonts
│   ├── styles - application styles
│   ├── index.tsx - application entry point
├──
```

Module structure
```
├── module-name
│   ├── components
│   ├── api 
│   ├── pages
│   ├── stores
│   ├── constants
│   ├── models
│   ├── utils
│   ├── hooks
├──
```


## Run application

Install dependencies
```bash
npm install
```

Run locally
```bash 
npm run dev
```

Build application
```bash
npm run build
```

Serve production build locally
```bash
npm run serve:prod
```

Check for linter errors
```bash 
npm run lint:check
```

Fix linter errors
```bash 
npm run lint:fix
```