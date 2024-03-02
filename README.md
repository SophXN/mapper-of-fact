# Mapper of Fact

built by [🧚🏼‍♀️ soph](https://sophxn.framer.website/dark)

## Tech Stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [PlanetScale](https://planetscale.com)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Getting Started

`yarn dev` to start the development server.

`npx prisma studio` to open the Prisma Studio.

## Making changes to the database

1. `npx prisma db push` trigger schema updates
2. To trigger the schema updates, run `npx prisma generate` to update the Prisma Client.
   or rerun `yarn`

## Deployed on Vercel

https://mapper-of-fact.vercel.app/
