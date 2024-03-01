FROM node:20-alpine as builder

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest-8 --activate

COPY package*.json pnpm-lock.yaml* ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# Stage 2: Setup runtime environment
FROM node:20-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PORT=4000

RUN corepack enable && corepack prepare pnpm@latest-8 --activate

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 4000

CMD ["pnpm", "run", "start"]

# docker build -f Dockerfile -t portfolio .