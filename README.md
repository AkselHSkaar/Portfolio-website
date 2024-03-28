# My portfolio

My portfolio web page, made with [next.js 14](https://nextjs.org/).

Visit the [live site](https://akselskaar.no/)

## :rocket: Run the project locally

- Clone the repo
- Run `pnpm install`
- Run `pnpm run dev`
- Open the local server at [http://localhost:3000/](http://localhost:3000/)

## :sparkles: Tech stack

- Next.js 14 with the app router
- TypeScript
- Tailwind CSS
- Resend for contact emails (with react-emails)
- React hook form & zod for forms and validation
- Chadcn/ui component liberary

## :cloud: Deplyment

The website is deployed to Microsoft Azure using GitHub Actions for continuous integration and continuous deployment.

1. **Containerization:** The website is containerized using Docker and stored in Azure Container Registry.
2. **Deployment to Azure App Service:** Azure App Service is utilized to host the containerized application.
3. **Automatic Updates:** With CI/CD configured through GitHub Actions, any changes pushed to the main branch trigger an automatic deployment process, ensuring that the latest version of the application is always available to users.

## :page_facing_up: Resources

- [Github repo](https://github.com/AkselHSkaar/my-portfolio)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind Documentation](https://tailwindcss.com/)
- [Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/)
- [Azure Container Registry](https://learn.microsoft.com/en-us/azure/container-registry/)

<hr />

Copyright :copyright: [Aksel Skaar](https://github.com/AkselHSkaar)
