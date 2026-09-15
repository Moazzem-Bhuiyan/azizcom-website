This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy to VPS

Pushing to `main` runs `.github/workflows/deploy.yml`. The workflow builds and pushes a commit-tagged Docker image, connects to the VPS, pulls that image, and starts a candidate replica. It switches the active container only after the candidate passes its health check.

```bash
docker pull nazmulhasn/azizcom_website:<commit-sha>
```

Add these GitHub Actions secrets before deploying:

- `DOCKERHUB_USERNAME`: Docker Hub username for the image repository
- `DOCKERHUB_TOKEN`: Docker Hub access token with push permission
- `VPS_HOST`: VPS hostname or IP address
- `VPS_USERNAME`: SSH username
- `VPS_SSH_KEY`: private SSH key for that user
- `VPS_PORT`: SSH port, optional (defaults to `22`)

The VPS must have the current `azizcom_website` container and `/opt/azizcom/.env`. The workflow pulls the new image directly; it does not run `git pull` or require Docker Compose during deployment.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
