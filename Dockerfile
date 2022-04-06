#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

ARG REPO=mcr.microsoft.com/dotnet
FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM @REPO/sdk:5.0 AS build
ENV BuildingDocker true
WORKDIR /src
COPY ["ExpeditionProject.csproj", "."]
RUN dotnet restore "./ExpeditionProject.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "ExpeditionProject.csproj" -c Release -o /app/build

FROM node:12-alpine as build-node
WORKDIR .
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY ./ .
RUN npm run-script build

FROM build AS publish
RUN dotnet publish "ExpeditionProject.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=build-node /build ./build
CMD ASPNETCORE_URLS=http://*:$PORT dotnet NetCoreReactHeroku.dll